import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
  } catch (error) {
    // TODO: Better error handling
    console.error(error);
    throw error;
  }

  mongoose.Promise = global.Promise;

  // TODO: What should replace this?
  // mongoose.set('useCreateIndex', true);
}

export { connect };
