import {model, Schema} from 'mongoose';
const ProductSchema = new Schema(
    {
        category: {
            type: String,
            required: [true, "Category is required!"],
            minlength: [2, "Category must be at least 2 characters long!"],
            maxlength: [255, "Category must be less than 255 characters long"]
        },
        productName: {
            type: String,
            required: [true, "Product Name is required!"],
            minlength: [2, "Product Name must be at least 2 characters long!"],
            maxlength: [255, "Product Name must be less than 255 characters long"]
        },
        productOrder: {
            type: Number,
            required: [true, "Order is required!"],
            min: [1, "Order must be at least 1!"]
        },
        repurchase: {
            type: Boolean,
            default: false
        },
        routine: {type: Schema.Types.ObjectId, ref: 'Routine'}
    },
    { timestamps: true }
);
const Product = model("Product", ProductSchema);
export default Product;