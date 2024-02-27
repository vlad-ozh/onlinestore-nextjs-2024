import mongoose from 'mongoose';

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    const db = await mongoose.connect(process.env.DATABASE_URL);

    connection.isConnected = db.connections[0].readyState;

    console.log('Mongo Database Connection successfully established.');
  } catch (error) {
    throw new Error('Error connecting to Mongo Database: ', error);
  }
};
