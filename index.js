import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db_config/db.js';


dotenv.config();
connectdb().then()

const app = express();





const port = process.env.PORT
app.listen(port, () => 
  console.log(`Server is running on port ${port}`))
