const crypto = require('crypto')
const db = require("../models");
const nodemailer = require('nodemailer');
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    return res.status(500).send({ message: "User registered successfully!" });
    // if (req.body.roles) {
    //   const roles = await Role.findAll({
    //     where: {
    //       name: {
    //         [Op.or]: req.body.roles,
    //       },
    //     },
    //   });

    //   // const result = user.setRoles(roles);
    //   res.send({ message: "User registered successfully!" });
    // } else {
    //   // user has role = 1
    //  res.send({ message: "User registered successfully!" });
    // }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
      console.log(user.password,req.body.password, passwordIsValid)
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    let authorities = [];
    const roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    req.session.token = token;

    return res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};

// Generate a random reset token
const generateResetToken = () => {
  const length = 20; // Length of the reset token
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
};


const sendPasswordResetEmail = (email, resetToken) => {
  const msg = {
    to: email, // Change to your recipient
    from: 'onlineshopresponse@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  
  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'onlineshopresponse', // e.g., 'Gmail', 'Outlook', 'SendGrid', etc.
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Configure the email content
  const mailOptions = {
    from: 'onlineshopresponse@example.com',
    to: email,
    subject: 'Password Reset',
    text: `Please click the following link to reset your password: ${resetToken}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending password reset email:', error);
    } else {
      console.log('Password reset email sent:', info.response);
    }
  });
};

exports.initiatePasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    // Generate a reset token
    const resetToken = generateResetToken();
    const resetTokenExpiration = new Date(Date.now() + 3600000); // Token expires in 1 hour

    // Save the reset token and expiration date to the user record
    user.resetToken = resetToken;
    user.resetTokenExpiration = resetTokenExpiration;
    await user.save();

    // Send the password reset email to the user
    sendPasswordResetEmail(user.email, resetToken);

    return res.status(200).send({ message: 'Password reset initiated. Please check your email.' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};


exports.resetPassword = async (req, res) => {
  const { email, resetToken, newPassword } = req.body;

  try {
    // Find the user by email and reset token
    const user = await User.findOne({ where: { email, resetToken } });

    if (!user) {
      return res.status(404).send({ message: 'Invalid reset token or email.' });
    }

    // Check if the reset token has expired
    if (user.resetTokenExpiration < new Date()) {
      return res.status(400).send({ message: 'Reset token has expired.' });
    }

    // Update the user's password
    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    return res.status(200).send({ message: 'Password changed successfully.' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};



