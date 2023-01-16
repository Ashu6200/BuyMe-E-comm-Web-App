import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import subcategoryRouter from "./routes/subcategoryRoute.js";
import ratingRouter from "./routes/ratingRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
dotenv.config();

// its is used for the put or post method only. so that we can save what we are sending (object)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route

app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/subcategory', subcategoryRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/orders', orderRouter);



// connect with database
// mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB connection successfull")
}).catch(() => {
    console.log("Some error occured");
});

const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Serve running at http://localhost:${port}`);
});
