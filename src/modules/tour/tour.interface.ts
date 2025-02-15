import { Model } from 'mongoose';

export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDate: Date;
  startLocation: string;
  location: string[];
  slug: string;
  availableSeats: number;
}
export interface ITourMethods {
  nearestStartDate: Date | null;
  estimatedEndDate: Date | null;
}
type TTourModel = Model<ITour, Record<string, never>, ITourMethods>;
export default TTourModel;
