import { Router } from "express";
const router = Router();
import {getAllProducts, deleteProducts} from "../controllers/product.controller.js";

// All routes with the /routines path
router.route("/products")
    .get(getAllProducts)
    .delete(deleteProducts)

export default router