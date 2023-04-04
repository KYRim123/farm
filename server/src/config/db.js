import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL,
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connect to database is successful");
    } catch (error) {
        console.log("connect to database is failure!");
    }
}
