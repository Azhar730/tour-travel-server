import mongoose from 'mongoose';
import Tour from '../tour/tour.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (payload: IBooking): Promise<IBooking> => {
  const { tour, bookedSlots } = payload;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const requiredTour = await Tour.findById(tour);
    if (!requiredTour) {
      throw new Error('tour not found');
    }
    const totalPrice = requiredTour?.price * bookedSlots;
    payload.totalPrice = totalPrice;
    payload.bookingStatus = 'Pending';
    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Seats not available');
    }
    const result = await Booking.create([payload], { session });
    const updatedTour = await Tour.findByIdAndUpdate(
      result[0].tour,
      {
        $inc: {
          availableSeats: -bookedSlots,
        },
      },
      { new: true, session },
    );
    if (!updatedTour) {
      throw new Error('Failed to updated tour');
    }
    await session.commitTransaction();
    await session.endSession();
    return result[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};
export const BookingServices = {
  createBookingIntoDB,
};
