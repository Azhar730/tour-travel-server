import QueryBuilder from '../../app/builder/QueryBuilder';
import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTourIntoDB = async (payload: string) => {
  const result = await Tour.create(payload);
  return result;
};

const getAllTourFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query };
  // const excludedItem = ['searchTerm', 'page','limit','sortOrder','sortBy'];
  // excludedItem.forEach((item) => delete queryObj[item]);
  // const searchTerm = query?.searchTerm || '';
  // const searchableFields = ['name', 'startLocation', 'locations'];

  // const searchQuery = Tour.find({
  //   $or: searchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });
  // const filterQuery = searchQuery.find(queryObj);
  // const page = Number(query?.page) || 1;
  // const limit = Number(query?.limit) || 10;
  // const skip = (page - 1) * limit;
  // const paginateQuery = filterQuery.skip(skip).limit(limit);
  // let sortStr;
  // if (query?.sortBy && query?.sortOrder) {
  //   const sortBy = query?.sortBy;
  //   const sortOrder = query?.sortOrder;
  //   sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
  // }
  // const sortQuery = paginateQuery.sort(sortStr);
  // let fields = '-__v'
  // if(query?.fields){
  //   fields = (query?.fields as string).split(',').join('')
  // }
  // const result = await sortQuery.select(fields)
  const searchableFields = ['name', 'startLocation', 'locations'];
  const tours = new QueryBuilder(Tour.find(), query)
    .search(searchableFields)
    .filter()
    .paginate()
    .sort()
    .fields();

  const result = await tours.modelQuery;
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
