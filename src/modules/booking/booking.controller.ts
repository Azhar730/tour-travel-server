import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req.body);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.OK,
    message: 'Create booking successful',
    data: result,
  });
});
export const BookingControllers = {
  createBooking,
};
