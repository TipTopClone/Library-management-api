import Joi from 'joi';
import joi from 'joi';

export const newUserValidation = (req, res, next) => {
  try {
    //model what your validation is
    const schema = joi.object({
      fName: Joi.string().required(),
      lName: Joi.string().required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      phone: Joi.string().allow('', null),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.json({
        status: 'error',
        message: error.message,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const loginValidation = (req, res, next) => {
  try {
    //model what your validation is
    const schema = joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),

      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.json({
        status: 'error',
        message: error.message,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
