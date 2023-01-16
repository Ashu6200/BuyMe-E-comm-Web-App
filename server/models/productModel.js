import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, category: {
        type: String,
        required: true,
    }, subcategory: {
        type: String,
        required: true,
    }, description: {
        type: String,
        required: true,
    }, price: {
        type: Number,
        required: true,
    }, star: {
        type: String,
        required: true,
    }, sizes: [{
        type: Object,
        required: true,
    }], colors: [{
        type: Object,
        required: true,
    }], image: {
        type: String,
        required: true,
    }, imageOne: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);
export default Product