import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string(),
  phone: yup.number(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
  role: yup.string().default('user'),
});
console.log('userSchema', userSchema.isValid);
