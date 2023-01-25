import { Box, Typography, useTheme, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../../components/Header';
import { tokens } from '../../theme';
import { useAuth } from '../../contexts/AuthContext';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('required'),
  password: yup.string().required('required'),
});

export default function Login() {
  const [error, setError] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    try {
      await login(values);
      navigate('/');
    } catch (err) {
      setError('There was an error logging in!');
    }
  }

  return (
    <Box m="20px">
      <Header title="LOGIN" subtitle="Login to your account" />

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
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Typography variant="h4" color={colors.greenAccent[400]}>
        If you do not have an account,{' '}
        <Link to="/signup" style={{ color: colors.blueAccent[400] }}>
          Sign Up
        </Link>{' '}
        instead
      </Typography>
      <Typography variant="h4" color={colors.redAccent[500]}>
        {error}
      </Typography>
    </Box>
  );
}
