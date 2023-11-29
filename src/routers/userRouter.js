import express from 'express';
import { createUser, getUserByEmail } from '../models/user/UserModel.js';
import { comparePassword, hashPassword } from '../utils/bcrypt.js';
import {
  loginValidation,
  newUserValidation,
} from '../middlewares/joiValidation.js';
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.json({
      status: 'success',
      message: 'to do get user',
    });
  } catch (error) {
    next(error);
  }
});
router.post('/', (req, res, next) => {
  try {
    res.json({
      status: 'success',
      message: 'to do create new user',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/login', loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //get user by email
    const user = await getUserByEmail(email);
    console.log(user);

    if (user?._id) {
      //check if password from db and plaintext matches

      const isMatched = comparePassword(password, user.password);

      if (isMatched) {
        return res.json({
          status: 'success',
          message: 'Logged in successfully',
        });
      }
    }

    //jwts
    res.json({
      status: 'error',
      message: 'Invalid login details',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/admin-user', newUserValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    req.body.role = 'admin';
    console.log(req.body);
    const user = await createUser(req.body);
    if (user?._id) {
      return res.json({
        status: 'success',
        message: 'The admin user has been created successfully',
      });
    }
    res.json({
      status: 'error',
      message: 'Unable to create the admin user, please try again',
    });
  } catch (error) {
    if (error.message.includes('E1100 duplicate key error collection')) {
      error.message = 'There is already an user used this email in our system';
      error.errorCode = 200;
    }
    next(error);
  }
});

export default router;
