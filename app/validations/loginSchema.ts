// validationSchemas/loginSchema.ts

import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  UserName: Yup.string().required('Username is required'),
  Password: Yup.string().required('Password is required'),
});

export default loginSchema;
