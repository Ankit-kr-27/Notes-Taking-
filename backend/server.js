import express from 'express'
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';



const app = express()

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes)

app.listen(5001, () => {
  console.log("server running on port: http://localhost:5001/");
  
})