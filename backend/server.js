import express from 'express';
import  path from "path";
import dotenv from'dotenv';
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from 'morgan'
import {notFound , errorHandler} from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoute.js";

dotenv.config();

connectDB();

if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
  res.send("API IS RUNNING...")
})



app.use("/api/products",productRoutes) ;
app.use("/api/users",userRoutes) ;
app.use("/api/orders",orderRoutes) ;

const __dirname = path.resolve()

if ('development' === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT,
  console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
