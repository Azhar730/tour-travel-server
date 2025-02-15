import { Types } from 'mongoose';

export interface IBooking {
  user: Types.ObjectId;
  tour: Types.ObjectId;
  bookedSlots: number;
  bookingStatus: 'Pending' | 'Paid' | 'Canceled';
  totalPrice: number;
}
