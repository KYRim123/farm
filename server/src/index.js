import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from "./routes/index.js"
import { connectDB } from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//connect database
connectDB()
//router
route(app)



app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
})