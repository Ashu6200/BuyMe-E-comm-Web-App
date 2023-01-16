import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            title: {
                type: String,
                required: true,
            }, quantity: {
                type: Number,
                required: true,
            }, size: {
                type: String,
                required: true,
            }, color: {
                type: String,
                required: true,
            }, image: {
                type: String,
                required: true,
            }, price: {
                type: Number,
                required: true,
            }, product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            }
        }
    ],
    userId: {
        type: String,
        required: true,
    }, subTotal: {
        type: Number,
        required: true,
    }, taxPrice: {
        type: Number,
        required: true,
    }, totalPrice: {
        type: Number,
        required: true,
    }, name: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
    }, address: {
        type: String,
        required: true,
    }, phone: {
        type: String,
        required: true,
    }, isPaid: {
        type: Boolean,
        required: true,
        default: false,
    }, isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;