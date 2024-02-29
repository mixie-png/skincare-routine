import { model, Schema } from 'mongoose';
const RoutineSchema = new Schema(
    {
        routineName: {
            type: String,
            required: [true, "Routine Name is required!"],
            minlength: [2, "Routine Name must be at least 2 characters long!"],
            maxlength: [255, "Routine Name must be less than 255 characters long"]
        },
        routineType: {
            type: String,
            required: [true, "Type is required!"],
            minlength: [5, "Type must be at least 5 characters long!"],
            maxlength: [255, "Type must be less than 255 characters long"]
        },
        frequency: {
            type: String,
            required: [true, "Frequency is required!"],
            minlength: [2, "Frequency must be at least 2 characters long!"],
            maxlength: [255, "Frequency must be less than 255 characters long"]
        },
        products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    },
    { timestamps: true }
);
const Routine = model("Routine", RoutineSchema);
export default Routine;