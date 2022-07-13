import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes'
import cors from 'cors'

const app = express()
app.use(cors())
mongoose.connect('mongodb://localhost/myapi')

app.use(express.json())
app.use(routes)


app.listen(3001, () => {
    console.log("f")
})