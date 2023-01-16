import express from 'express'
import Blog from '../models/blogModel.js';

const blogRouter = express.Router();

blogRouter.post('/add', async (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
    });
    const blog = await newBlog.save();
    res.send({
        _id: blog._id,
        title: blog.title,
        description: blog.description,
        author: blog.author
    })
});

blogRouter.get('/all', async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
});

blogRouter.get('/find/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
        res.send(blog);
    } else {
        res.status(404).send({ message: "Blog not found!" });
    }
});

blogRouter.get('/countBlogs', async (req, res) => {

    try {
        const countBlogs = await Blog.countDocuments({ author: 'Admin' });
        res.status(200).json({
            author: 'Admin', count: countBlogs
        });

    } catch (err) {
        console.log(err.message);
    }

});

blogRouter.delete('/delete/:id', async (req, res) => {

    try {

        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json('Blog has been deleted!');

    } catch (err) {
        console.log('Can`t be deleted!');
    }

});

blogRouter.post('/update', async (req, res) => {
    const blog = await Blog.findById(req.body._id);
    if (blog) {
        blog.title = req.body.title || blog.title;
        blog.description = req.body.description || blog.description

        const updateBlog = await Blog.save();
        res.send({
            _id: updateBlog._id,
            title: updateBlog.title,
            description: updateBlog.description,
            author: updateBlog.author
        })
    } else {
        res.status(401).send({ message: "blog not found!" });
    }
})
export default blogRouter;