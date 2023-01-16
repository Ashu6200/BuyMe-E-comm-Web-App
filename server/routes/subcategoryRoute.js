import express from 'express'
import Subcategory from '../models/subcategoryModel.js';


const subcategoryRouter = express.Router();

// get all subcategory
subcategoryRouter.get('/all', async(req, res) => {
    const subcategory = await Subcategory.find();
    res.send(subcategory);
});

export default subcategoryRouter;