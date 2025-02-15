import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.route';
import { StatusCodes } from 'http-status-codes';
import { bookingRouter } from './modules/booking/booking.route';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);
app.use('/api/booking', bookingRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: 500,
    success: true,
    message: 'Hello World!',
  });
});
app.use(globalErrorHandler);
export default app;
