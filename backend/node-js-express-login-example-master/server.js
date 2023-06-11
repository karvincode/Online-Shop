const express = require("express");
const cookieSession = require("cookie-session");
const setupProxy = require("./app/setupProxy")
const cors = require("cors"); // Import the cors module
const app = express();

// setupProxy(app);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Update with the origin of your client application
//   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(cors({origin:"*"}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "karvin-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello From The Server" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// test to see if server is connected to frontend
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
