import { Model } from 'mongoose';

export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  photo: string;
  role: 'User' | 'Admin';
  userStatus: 'Active' | 'Inactive';
}
