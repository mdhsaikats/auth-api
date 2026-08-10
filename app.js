import express from 'express';
import authRouter from './src/routes/authRoutes.js';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//routes
app.use("/users", authRouter);
//middlewares
//error handlers

export default app;