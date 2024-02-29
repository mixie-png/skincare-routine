import Routine from '../models/routine.model.js';
import Product from '../models/product.model.js';

// create new
async function createRoutine(req, res) {
    console.log(req.body)
    try {
        const {routineName, routineType, frequency, products} = req.body
        const newRoutine = await Routine.create({routineName, routineType, frequency});
        const prods = products.map((product) => Product({...product, routine : newRoutine._id}))
        await Product.bulkSave(prods)
        newRoutine.products = prods.map(product => product._id)
        await newRoutine.save()
        const routine = await Routine.findById(newRoutine._id).populate('products')
        res.json(routine);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllRoutines(req, res) {
    try {
        const allRoutines = await Routine.find().populate('products');
        res.json(allRoutines);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}

async function getOneRoutine(req, res) {
    try {
        const foundRoutine = await Routine.findById(req.params.id);
        res.json(foundRoutine);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneRoutine(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedRoutine);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteOneRoutine(req, res) {
    try {
        const deletedOneRoutine = await Routine.findByIdAndDelete(req.params.id);
        res.json(deletedOneRoutine);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}



export {
    createRoutine,
    getAllRoutines,
    getOneRoutine,
    updateOneRoutine,
    deleteOneRoutine
};