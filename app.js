import express from 'express';
import authRouter from './src/routes/authRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import morgan from 'morgan';

const app = express();
const appRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
appRouter.use('/api/v1/auth', authRouter);
appRouter.use('/api/v1/users', userRouter);

app.use(appRouter);

// Error handlers

export default app;