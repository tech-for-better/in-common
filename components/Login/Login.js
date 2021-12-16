import { useState } from 'react';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from '@firebase/auth';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Card,
  Alert,
  Stack,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchemaLogin = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

const validationSchemaForgotPassword = yup.object({
  emailForgot: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function Login() {
  const [error, setError] = useState(false);
  const [errorForgot, setErrorForgot] = useState(false);
  const [success, setSuccess] = useState(false);
  const [forgotPasswordShow, setForgotPasswordShow] = useState(false);
  const [loadingForgot, setLoadingForgot] = useState(false);
  const [loading, setLoading] = useState(false);

  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      setLoading(true);
      logIn();
    },
  });

  const formikForgotPassword = useFormik({
    initialValues: {
      emailForgot: '',
    },
    validationSchema: validationSchemaForgotPassword,
    onSubmit: (values) => {
      setLoadingForgot(true);
      resetPassword();
      setTimeout(() => {
        setForgotPasswordShow(false);
      }, 1000);
    },
  });

  async function logIn() {
    try {
      await signInWithEmailAndPassword(
        auth,
        formikLogin.values.email,
        formikLogin.values.password
      );
      setError(false);
    } catch (error) {
      setLoading(false);
      return setError(true);
    }
  }
  async function resetPassword() {
    try {
      await sendPasswordResetEmail(
        auth,
        formikForgotPassword.values.emailForgot
      );
      return setSuccess(true);
    } catch (error) {
      setLoadingForgot(false);
      return setErrorForgot(true);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      {!forgotPasswordShow && (
        <Card
          sx={{
            minWidth: 275,
            padding: 5,
            borderRadius: 3,
            mt: 5,
          }}
        >
          <form onSubmit={formikLogin.handleSubmit}>
            <Stack spacing={3}>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>

              <label hidden htmlFor="email">
                Email
              </label>
              <Box>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formikLogin.values.email}
                  onChange={(e) => {
                    formikLogin.handleChange(e);
                    setError(false);
                    setSuccess(false);
                  }}
                  error={
                    formikLogin.touched.email &&
                    Boolean(formikLogin.errors.email)
                  }
                  helperText={
                    formikLogin.touched.email && formikLogin.errors.email
                  }
                />
              </Box>
              <label hidden htmlFor="password">
                Password
              </label>
              <Box>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formikLogin.values.password}
                  onChange={(e) => {
                    formikLogin.handleChange(e);
                    setError(false);
                    setSuccess(false);
                  }}
                  error={
                    formikLogin.touched.password &&
                    Boolean(formikLogin.errors.password)
                  }
                  helperText={
                    formikLogin.touched.password && formikLogin.errors.password
                  }
                />
              </Box>
              <Button
                variant="outlined"
                sx={{ padding: 1.85 }}
                fullWidth
                type="submit"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>

              <Button
                variant="outlined"
                sx={{ padding: 1.85 }}
                onClick={(e) => {
                  e.preventDefault();
                  setForgotPasswordShow(true);
                }}
                fullWidth
              >
                Forgot password
              </Button>
            </Stack>
          </form>

          {error ? (
            <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
              Email and/or password is incorrect
            </Alert>
          ) : null}
          {success ? (
            <Alert severity="success" sx={{ padding: 1.85, mt: 2 }}>
              Password reset email sent
            </Alert>
          ) : null}
        </Card>
      )}

      {forgotPasswordShow && (
        <Card
          sx={{
            minWidth: 275,
            padding: 5,
            borderRadius: 3,
            mt: 5,
          }}
        >
          <form onSubmit={formikForgotPassword.handleSubmit}>
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Reset password
            </Typography>

            <label hidden htmlFor="emailForgot">
              Email
            </label>
            <Box>
              <TextField
                fullWidth
                id="emailForgot"
                name="emailForgot"
                label="Email"
                value={formikForgotPassword.values.emailForgot}
                onChange={(e) => {
                  formikForgotPassword.handleChange(e);
                  setErrorForgot(false);
                }}
                error={
                  formikForgotPassword.touched.emailForgot &&
                  Boolean(formikForgotPassword.errors.emailForgot)
                }
                helperText={
                  formikForgotPassword.touched.emailForgot &&
                  formikForgotPassword.errors.emailForgot
                }
              />
            </Box>
            <Button
              variant="outlined"
              sx={{ mb: 2, padding: 1.85, mt: 2 }}
              type="submit"
              fullWidth
            >
              {loadingForgot
                ? 'Sending password reset email...'
                : 'Send password reset email'}
            </Button>
            <Button
              variant="outlined"
              sx={{ padding: 1.85 }}
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                setForgotPasswordShow(false);
              }}
            >
              Back to log in
            </Button>
          </form>
          {errorForgot ? (
            <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
              Email is incorrect
            </Alert>
          ) : null}
        </Card>
      )}
    </Container>
  );
}
