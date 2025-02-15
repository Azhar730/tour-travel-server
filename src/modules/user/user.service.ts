import { IUser } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (userData: IUser) => {
  // const result = await UserModel.create(user);
  const user = new UserModel(userData)
  const result = user.save()
  return result;
};
const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};
const updateUserFromDB = async (id: string, data: IUser) => {
  const result = await UserModel.findByIdAndUpdate(id, data,{new:true});
  return result;
};
const deleteUserFromDB = async (id: string) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};
export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
