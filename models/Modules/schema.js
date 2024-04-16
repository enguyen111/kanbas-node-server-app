import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
        id: { type: String, required: true, unique: true},
        name: { type: String, required: true, unique: true },
        description: String,
        course: { type: String, required: true},
        lessons: [Object],
    },
    { collection: "modules" });
export default moduleSchema;