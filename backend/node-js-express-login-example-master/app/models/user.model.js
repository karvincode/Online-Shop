module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
  });
  return User;
};
