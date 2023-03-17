import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:mN0SapLV9wvYIfP3@cluster-mongo-test.se0zp0l.mongodb.net/Farm?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connect to database is successful");
    } catch (error) {
        console.log("connect to database is failure!");
    }
}
