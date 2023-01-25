import { Box, Typography, useTheme, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import { tokens } from '../../theme';
import { useAuth } from '../../contexts/AuthContext';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const userSchema = yup.object().shape({
  username: yup.string().required('required'),
  email: yup.string().email('Invalid Email').required('required'),
  password: yup.string().required('required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('required'),
});

export default function Signup() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    await signup(values);
    navigate('/');
  }

  return (
    <Box m="20px">
      <Header title="SIGNUP" subtitle="Signup to a new account" />

      <Formik
        // eslint-disable-next-line react/jsx-no-bind
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ mb: '10px' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ mb: '10px' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ mb: '10px' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ mb: '10px' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Account
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Typography variant="h4" color={colors.greenAccent[400]}>
        If you already have an account,{' '}
        <Link to="/login" style={{ color: colors.blueAccent[400] }}>
          Login
        </Link>{' '}
        instead
      </Typography>
    </Box>
  );
}
