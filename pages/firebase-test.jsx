import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from '@firebase/auth';
import { useState } from 'react';
import { Card, inputAdornmentClasses } from '@mui/material';
import { TextField } from '@mui/material';
import { Container, Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export default function Test({ user }) {
  //current user state
  // const [user, setUser] = useState({});

  //auth state listener

  // onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  // signup

  // signup for states

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  // signup function

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
    } catch (error) {
      console.log(error);
    }
  }

  // login

  // login form states

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  // login function

  async function logIn() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out function to log out

  async function logOut() {
    try {
      await signOut(auth);
      console.log('signed out!');
    } catch (error) {
      console.log(error);
    }
  }

  // reset password

  // reset password state

  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  // reset password function

  async function resetPassword(auth, email) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('reset email sent');
      alert('Reset password email sent! Check your junk/spam folder');
    } catch (error) {
      console.log(error);
      alert('There was an error sending your password reset email');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          minWidth: 275,
          marginTop: 8,
          padding: 5,
          borderRadius: 3,

          mt: 5,
        }}
      >
        <form>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign up
          </Typography>

          <Box sx={{ mb: 2 }}>
            <label hidden htmlFor="email">
              Email
            </label>
            <TextField
              variant="outlined"
              id="filled-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              onChange={(e) => setSignUpEmail(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <label hidden htmlFor="password">
              Password
            </label>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              fullWidth
            />
          </Box>
          <Button
            variant="outlined"
            sx={{ padding: 1.85 }}
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
            fullWidth
          >
            Sign up
          </Button>
        </form>
      </Card>

      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,

          mt: 5,
        }}
      >
        <form>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Log in
          </Typography>

          <label hidden htmlFor="email">
            Email
          </label>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              id="filled-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              onChange={(e) => setLogInEmail(e.target.value)}
              fullWidth
            />
          </Box>
          <label hidden htmlFor="password">
            Password
          </label>
          <Box sx={{ mb: 2 }}>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setLogInPassword(e.target.value)}
              fullWidth
              helperText="Incorrect entry."
            />
          </Box>
          <Button
            variant="outlined"
            sx={{ padding: 1.85 }}
            onClick={(e) => {
              e.preventDefault();
              logIn();
            }}
            fullWidth
          >
            Log in
          </Button>
        </form>
      </Card>

      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,
          mt: 5,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resetPassword(auth, resetPasswordEmail);
            e.target.reset();
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Reset password
          </Typography>

          <label hidden htmlFor="resetPasswordEmail">
            Email
          </label>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              id="resetPasswordEmail"
              name="resetPasswordEmail"
              label="Email"
              type="email"
              autoComplete="current-email"
              onChange={(e) => setResetPasswordEmail(e.target.value)}
              fullWidth
            />
          </Box>
          <Button
            variant="outlined"
            sx={{ padding: 1.85 }}
            type="submit"
            fullWidth
          >
            Send password reset email
          </Button>
        </form>
      </Card>

      <h2>{user?.email ? `${user?.email} logged in` : 'no one logged in'}</h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log('logging out');
          logOut();
        }}
      >
        log out
      </button>
    </Container>
  );
}
