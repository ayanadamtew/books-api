const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': `"title" cannot be empty`,
    'any.required': `"title" is a required field`
  }),
  author: Joi.string().required().messages({
    'string.empty': `"author" cannot be empty`,
    'any.required': `"author" is a required field`
  }),
  isbn: Joi.string().required().messages({
    'string.empty': `"isbn" cannot be empty`,
    'any.required': `"isbn" is a required field`
  }),
  publishedYear: Joi.number().integer().min(1000).max(new Date().getFullYear()).required().messages({
    'number.base': `"publishedYear" must be a number`,
    'number.min': `"publishedYear" must be a valid 4-digit year`,
    'number.max': `"publishedYear" cannot be in the future`,
    'any.required': `"publishedYear" is a required field`
  })
});

const updateBookSchema = bookSchema.fork(['title', 'author', 'isbn', 'publishedYear'], (field) =>
  field.optional()
);
exports.validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  if (error) return res.status(400).json({ status: 'error', message: error.details[0].message });
  next();
};
exports.validateBookUpdate = (req, res, next) => {
  const { error } = updateBookSchema.validate(req.body);
  if (error) return res.status(400).json({ status: 'error', message: error.details[0].message });
  next();
};
