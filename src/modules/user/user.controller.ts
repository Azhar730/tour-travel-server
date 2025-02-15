import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await userServices.createUserIntoDB(user);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'user created Successful',
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB();
  sendResponse(res, {
    status: true,
    statusCode: 200,
    message: 'get all user successful',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserFromDB(userId);
  sendResponse(res, {
    status: true,
    statusCode: 200,
    message: 'single user',
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const data = req.body;
  const { userId } = req.params;
  const result = await userServices.updateUserFromDB(userId, data);
  sendResponse(res, {
    status: true,
    statusCode: 200,
    message: 'User Updated Successfully',
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  await userServices.deleteUserFromDB(userId);
  sendResponse(res, {
    status: true,
    statusCode: 200,
    message: 'User Deleted Successfully',
    data: {},
  });
});
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
