import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTourIntoDB = async (payload: string) => {
  const result = await Tour.create(payload);
  return result;
};

const getAllTourFromDB = async () => {
  const result = await Tour.find();
  return result;
};
const getSingleTourFromDB = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};
const updateTourFromDB = async (id: string, payload: Partial<ITour>) => {
  const result = await Tour.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteTourFromDB = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};
export const tourServices = {
  createTourIntoDB,
  getAllTourFromDB,
  getSingleTourFromDB,
  updateTourFromDB,
  deleteTourFromDB,
};
