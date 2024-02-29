import {model, Schema} from 'mongoose';
const RoutineSchema = new Schema(
    {
        routineName: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        routineType: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [5, "Author must be at least 5 characters long!"],
            maxlength: [255, "Author must be less than 255 characters long"]
        },
        frequency: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        category: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        productName: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        productOrder: {
            type: Number,
            required: [true, "Pages is required!"],
            min: [1, "Pages must be at least 1!"]
        },
        repurchase: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Routine = model("Routine", RoutineSchema);
export default Routine;