import userSchema from './UserSchema.js';

//Create
export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

//read
export const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

//upate

//delete
