import { tourServices } from './tour.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createTour = catchAsync(async (req, res) => {
  const tour = req.body;
  const result = await tourServices.createTourIntoDB(tour);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'Tour Create Successfully',
    data: result,
  });
});
const getAllTour = catchAsync(async (req, res) => {
  const result = await tourServices.getAllTourFromDB();
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.OK,
    message: 'All Tour Get Successful',
    data: result,
  });
});
const getSingleTour = catchAsync(async (req, res) => {
  const id = req.params.tourId;
  const result = await tourServices.getSingleTourFromDB(id);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.OK,
    message: 'Get Single Tour Successful',
    data: result,
  });
});
const updateTour = catchAsync(async (req, res) => {
  const id = req.params.tourId;
  const payload = req.body;
  const result = await tourServices.updateTourFromDB(id, payload);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.OK,
    message: 'Tour Updated Successful',
    data: result,
  });
});
const deleteTour = catchAsync(async (req, res) => {
  const id = req.params.tourId;
  const result = await tourServices.deleteTourFromDB(id);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.OK,
    message: 'Tour Deleted Successful',
    data: result,
  });
});
export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
};
