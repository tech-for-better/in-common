import { Container, Box, Alert } from '@mui/material';
import { auth } from '../../firebase';
import { signOut } from '@firebase/auth';
// import { updateUser } from '@firebase/auth';

export default function Confirmation({ user, setUser }) {
  //     getAuth()
  //     .updateUser(uid, {
  //       email: 'modifiedUser@example.com',
  //       phoneNumber: '+11234567890',
  //       emailVerified: true,
  //       password: 'newPassword',
  //       displayName: 'Jane Doe',
  //       photoURL: 'http://www.example.com/12345678/photo.png',
  //       disabled: true,
  //     })
  //     .then((userRecord) => {
  //       // See the UserRecord reference doc for the contents of userRecord.
  //       console.log('Successfully updated user', userRecord.toJSON());
  //     })
  //     .catch((error) => {
  //       console.log('Error updating user:', error);
  //     });

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
