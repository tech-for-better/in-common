import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '@firebase/auth';
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

import { base } from '../../lib/init-airtable';

export default function SignUpComponent({ user }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [type, setType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgAddress, setOrgAddress] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const makeAirtableAccount = async (uid) => {
    const field = {
      UID: uid,
      Email: signUpEmail,
      Type: type,
      'Organisation Name': orgName,
      'Organisation Address': orgAddress,
      'Primary Contact Name': contactName,
      'Primary Contact Number': contactNumber,
    };
    const tableAccounts = base('Accounts');
    const entry = await tableAccounts.create(
      [{ fields: field }],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      await makeAirtableAccount(user.user.uid);
    } catch (error) {
      console.log(error);
      alert('sorry we could not sign you up');
    }
  }

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
              <label hidden htmlFor="Organisation Address">
                Organisation Address
              </label>
              <TextField
                variant="outlined"
                id="filled-organisation-address-input"
                label="Organisation Address"
                autoComplete="current-organisation-address"
                onChange={(e) => setOrgAddress(e.target.value)}
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
