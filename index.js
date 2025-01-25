import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db_config/db.js';
import propertiesRoute from './routes/propertiesRoute.js';
import adminRouter from './routes/adminRoute.js';
import authRouter from './routes/authRoute.js';




dotenv.config();
connectdb().then()

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", propertiesRoute)
app.use("/api/admin", adminRouter)
app.use("/api/auth", authRouter)




const port = process.env.PORT
app.listen(port, () => 
  console.log(`Server is running on port ${port}`))
