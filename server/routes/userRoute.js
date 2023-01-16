import express from 'express';
import User from '../models/userModel.js';
import bcrypt from "bcryptjs";

const userRouter = express.Router();
// for login user
userRouter.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin
            });
            return;
        }
    }
    res.status(401).send({ message: "Invalid password or email!" });
});

// for register users
userRouter.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        username: user.username,
        password: user.password,
        isAdmin: user.isAdmin
    });

});
// for update users
userRouter.put('/update', async (req, res) => {
    const user = await User.findById(req.body._id);
    if (user) {
        user.username = req.body.username || user.username,
            user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password);
        }
        const updateUser = await User.save();
        res.send({
            _id: updateUser._id,
            username: updateUser.username,
            email: updateUser.email,
            password: updateUser.password,
            isAdmin: updateUser.isAdmin
        })
    } else {
        res.send(401).send({ message: "User not found" })
    }

});

//get all the users for admin panel
userRouter.get('/all', async (req, res) => {
    const users = await User.find();
    res.send(users);
})
// get user by id for admin panel
userRouter.get('/find/:id', async (req, res) => {
    const users = await User.findById(req.params.id);
    if (users) {
        res.send(users);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
})


//count users for admin panel
userRouter.get('/countUsers', async (req, res) => {

    try {
        //i want only non-admin users
        const countUsers = await User.countDocuments({ isAdmin: false });
        res.status(200).json({
            isAdmin: false, count: countUsers
        });

    } catch (err) {
        console.log(err.message);
    }

});

//delete user
userRouter.delete('/delete/:id', async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!');

    } catch (err) {
        console.log('Can`t be deleted!');
    }

});

export default userRouter;