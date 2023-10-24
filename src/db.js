import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.srrltrl.mongodb.net/?retryWrites=true&w=majority`);
        console.log('<<< DB is connected >>>');
    } catch (error) {
        console.log(error)
    }
};