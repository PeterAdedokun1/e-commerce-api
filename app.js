const express = require("express");
require("dotenv").config();
require("express-async-errors");

const app = express();
//rest of the packages

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSantinize = require("express-mongo-sanitize");

//DATEBASE
const connectDB = require("./db/connect");
//routes

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/ProductRoutes");
const reviewRouter = require("./routes/ReviewRoutes");
const orderRouter = require("./routes/orderRoutes");
//middleware
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
const { authenticateUser } = require("./middleware/authentication");



app.set("trust proxy",1);
app.use(rateLimiter({
  windowMs: 15 *60*1000,
  max: 60
}))
app.use(helmet())
app.use(cors())
app.use(xss());
app.use(mongoSantinize())


app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"));
app.use(fileUpload());
app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews/", reviewRouter);
app.use("/api/v1/orders/", orderRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log(`server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
