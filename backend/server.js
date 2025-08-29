import express from 'express'
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'


const app = express()
 
app.use(
  cors({
    origin: "http://localhost:5173"
  }))
app.use(express.json()); //this will parse the json body
app.use(rateLimiter)


app.use("/api/notes", notesRoutes)

connectDB().then(() => {
  app.listen(5001, () => {
  console.log("server running on port: http://localhost:5001/"); 
  });
});
