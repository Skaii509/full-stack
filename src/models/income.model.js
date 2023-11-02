import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Income", incomeSchema);