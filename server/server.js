import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'


//App config
const app = express()
const PORT = process.env.PORT || 4000
await connectDB();

//Inialize middlewares
app.use(express.json())
app.use(cors())


//API routes
app.get('/', (req, res) => res.send('API Working'))

app.listen(PORT, ()=> console.log('Server running on port '+PORT)
)