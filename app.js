import express from 'express';
import authRouter from './src/routes/authRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.use("api/v1/auth", authRouter);
app.use("api/v1/users", userRouter);

//middlewares
//error handlers

export default app;