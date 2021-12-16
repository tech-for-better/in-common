import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import {
  Card,
  TextField,
  Container,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

export default function SignUpComponent({ user }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [type, setType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );

      const data = {
        UID: user.user.uid,
        'Login Email': signUpEmail,
        'Organisation Type': type,
        'Organisation Name': orgName,
        'Primary Contact Email': contactEmail,
        'Primary Contact Name': contactName,
        'Primary Contact Phone': contactNumber,
      };

      await fetch('/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
      alert('sorry we could not sign you up');
    }
  }

  return (
    <>
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
              <FormControl fullWidth>
                <InputLabel
                  hidden
                  id="organisation-type"
                  htmlFor="Organisation Type"
                >
                  Organisation Type
                </InputLabel>
                <Select
                  labelId="organisation-type-label"
                  id="organisation-type"
                  value={type}
                  label="Organisation Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={'School'}>School</MenuItem>
                  <MenuItem value={'Retirement Home'}>Retirement Home</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organisation Name">
                Organisation Name
              </label>
              <TextField
                variant="outlined"
                id="filled-organisation-name-input"
                label="Organisation Name"
                autoComplete="current-organisation-name"
                onChange={(e) => setOrgName(e.target.value)}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Primary Contact Name">
                Primary Contact Name
              </label>
              <TextField
                variant="outlined"
                id="filled-primary-contact-name-input"
                label="Primary Contact Name"
                autoComplete="current-primary-contact-name"
                onChange={(e) => setContactName(e.target.value)}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organisation Address">
                Primary Contact Email
              </label>
              <TextField
                variant="outlined"
                id="filled-organisation-email-input"
                label="Primary Contact Email"
                autoComplete="current-organisation-email"
                onChange={(e) => setContactEmail(e.target.value)}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Primary Contact Number">
                Primary Contact Number
              </label>
              <TextField
                variant="outlined"
                id="filled-primary-contact-number-input"
                label="Primary Contact Number"
                autoComplete="current-primary-contact-number"
                onChange={(e) => setContactNumber(e.target.value)}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="email">
                Login Email
              </label>
              <TextField
                variant="outlined"
                id="filled-email-input"
                label="Login Email"
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
              type="submit"
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
