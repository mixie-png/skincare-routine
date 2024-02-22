import { Router } from "express";
const router = Router();
import {createRoutine, getAllRoutines, getOneRoutine, updateOneRoutine, deleteOneRoutine} from "../controllers/routine.controller.js";

// All routes with the /routines path
router.route("/routines")
    .get(getAllRoutines)
    .post(createRoutine);
// All routes with the /users/:id path
router.route("/routines/:id")
    .get(getOneRoutine)
    .delete(deleteOneRoutine)
    .put(updateOneRoutine);
export default router;