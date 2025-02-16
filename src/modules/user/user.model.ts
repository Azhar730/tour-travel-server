import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: '{VALUE} is not Valid, Please Provide Valid Email',
    },
    immutable: true,
  },
  photo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
    required: true,
  },
  userStatus: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
    required: true,
  },
});

// userSchema.pre('find', function (next) {
//   this.find({ userStatus: { $ne: 'Inactive' } });
//   next();
// });
// userSchema.post('find', function (docs, next) {
//   docs.forEach((doc: IUser) => {
//     doc.name = doc.name.toUpperCase();
//   });
//   next();
// });
// create model
const UserModel = model<IUser>('User', userSchema);

export default UserModel;
