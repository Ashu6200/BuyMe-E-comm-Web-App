import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Admin',
    }
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blogs', blogSchema);
export default Blog;