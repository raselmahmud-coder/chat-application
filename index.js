const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandlers");
const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");
const userRouter = require("./router/userRouter");

const app = express();
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("show database error", err);
    } else {
      console.log("data base connected");
    }
  }
);
// middle ware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// view engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(path.join(__dirname, "public")));
// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));
// routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);
// not found handler
app.use(notFoundHandler);
//common error handler fn
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log("app is listening on", process.env.PORT);
});
