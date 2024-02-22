import Routine from '../models/routine.model.js';
// create new
async function createRoutine(req, res) {
    try {
        const newRoutine = await Routine.create(req.body);
        res.json(newRoutine);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllRoutines(req, res) {
    try {
        const allRoutines = await Routine.find();
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