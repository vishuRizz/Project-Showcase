import 'dotenv/config'
import express from "express"
import cors from "cors"
import connectDB from './database/index.js'
import userRouter from './routes/user.route.js'
import orgRouter from './routes/org.route.js'
import ticketRouter from './routes/tickets.route.js'
import taskRouter from './routes/task.route.js'

const app = express()
app.use(cors())

app.use(express.json());

const port = process.env.PORT || 3000

connectDB()

app.use('/api/users',userRouter)
app.use('/api/tasks',taskRouter)
app.use('/api/org',orgRouter)
app.use('/api/tickets',ticketRouter)

app.get('/',(req,res)=>{
    res.send("FSBU RUNNING")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})