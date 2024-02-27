import { connectToDb } from './connect';
import { User } from './models';
import { unstable_noStore as noStore } from 'next/cache';

export const getUser = async () => {
  noStore();

  try {
    connectToDb();
    const users = await User.find();
    console.log('🚀 ~ getUser ~ users:', users);

    return users;
  } catch (error: any) {
    throw new Error('Failed to fetch users: ', error);
  }
};
