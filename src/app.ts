import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.route';
import { StatusCodes } from 'http-status-codes';
import { bookingRouter } from './modules/booking/booking.route';
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
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: err.message,
    data: err,
  });
});
export default app;
