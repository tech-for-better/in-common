import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '@firebase/auth';
import { useState } from 'react';
import { Card } from '@mui/material';
import { TextField } from '@mui/material';
import { Container, Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

///importing the confirmation file

export default function SignUpComponent({ user, setUser }) {
  console.log('user access from sign-up -->', user);

  //auth state listener

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  // signup for states

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );

      alert('you are signed up');
    } catch (error) {
      console.log(error);
      alert('sorry we could not sign you up');
    }
  }

  //   async function logOut() {
  //     try {
  //       await signOut(auth);
  //       console.log('signed out!');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   console.log('logOut value -->', logOut());

  return (
    <>
      {/* {user ? <Confirmation /> : console.log('did not sign in')} */}
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
      </Container>
    </>
  );
}
