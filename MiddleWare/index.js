const express = require("express");
const app = express();
const port = 3000;

//loading middleware into the app
//inbuilt middleware
app.use(express.json());

//middleware - logging , autho ,validation
//creation of a middleware
// const loggingMiddleware = function (req, res, next) {
//   console.log("Logging krra hu");
//   next();
// };
// //loading middleware into application
// app.use(loggingMiddleware);

// const authMiddleware = function (req, res, next) {
//   console.log("auth krra hu");
// //   next();
//  res.send("Chalo sidha ghar ")
// };
// app.use(authMiddleware);

// const validationMiddleware = function (req, res, next) {
//   console.log("valid krra hu");
//   next();
// };
// app.use(validationMiddleware);

const route = require('./routes/route')
//mounting the routes
app.use('/api',route)

// -> /api/student
// -> /api/admin

app.get("/", (req, res) => {
  console.log("Main router handler hu");
  console.log(req.body);

  res.send("Hello Ranjan");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
