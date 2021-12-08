import { Container, Box, Alert } from '@mui/material';
import { auth } from '../../firebase';
import { signOut } from '@firebase/auth';

export default function Confirmation({ user, setUser }) {


  async function logOut() {
    try {
      await signOut(auth);
      console.log('signed out!');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Alert severity="success">
        {' '}
        <h1>SUCCESS!</h1>
        <h4>Please wait for a confirmation email</h4>
      </Alert>
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
