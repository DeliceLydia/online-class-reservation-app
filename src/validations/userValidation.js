const validationSchema = (values) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};
  const {
    email, password, name,
  } = values;
  if (email.trim() === '') {
    errors.email = 'Email is required';
  }
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  if (name.trim() === '') {
    errors.name = 'name is required';
  }

  if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!emailRegex.test(email)) {
    errors.email = 'Enter valid email';
  }

  if (name.length < 3) {
    errors.password = 'name must be at least 4 characters';
  }
  return errors;
};

export default validationSchema;
