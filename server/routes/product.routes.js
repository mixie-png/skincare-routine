import { Router } from "express";
const router = Router();
import {getAllProducts} from "../controllers/product.controller.js";

// All routes with the /routines path
router.route("/products")
    .get(getAllProducts)

export default router