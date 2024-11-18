import mongoose from "mongoose";

// Defining Schema for database
const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: "",
        trim: true,
    },
    due_date: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ["pending", "in_progress", "completed"],
        default: "pending",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

// Middleware to update the `updated_at` field before saving
taskSchema.pre("save", function (next) {
    this.updated_at = Date.now();
    next();
});


// Definig Model
const Task = new mongoose.model('TASK_DATA', taskSchema);

export default Task;
