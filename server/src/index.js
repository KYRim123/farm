import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from "./routes/index.js"
import { connectDB } from './config/db.js'

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//connect database
connectDB()
//router
route(app)



app.listen(port, () => {
    console.log("server is running on port " + port);
})