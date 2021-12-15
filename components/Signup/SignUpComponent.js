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
  Alert,
} from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { GridColumnHeaderSeparator } from '@mui/x-data-grid';
import { ConstructionOutlined } from '@mui/icons-material';

export default function SignUpComponent({ user }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [type, setType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  // const [loading, setLoading] = useState(false);

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
      return console.log(error);
    }
  }
  console.log(errorMessage.length);

  function checkErrors() {
    const emailReg = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,63}$';

    if (signUpPassword.length < 6) {
      setError(true);
      setErrorMessage((errors) => {
        return {
          ...errors,
          password: 'Password needs to be at least 6 characters',
        };
      });
    }
    if (!signUpEmail.match(emailReg)) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, email: 'Contact email is not valid' };
      });
    }

    if (/^\d+$/.contactNumber == false) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, phone: 'Phone number is not valid' };
      });
    }

    if (!contactEmail.match(emailReg)) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, contactEmail: 'Login email is not valid' };
      });
    }

    if (!contactName.length > 0) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, contactName: 'Please enter your name' };
      });
    }

    if (!orgName.length > 0) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, orgName: 'Please enter the organisation name' };
      });
    }

    if (!type.length > 0) {
      setError(true);
      setErrorMessage((errors) => {
        return { ...errors, orgType: 'Please select organisation type' };
      });
    }

    if (errorMessage === undefined) {
      return setError(false);
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
                  required
                  hidden
                  id="organisation-type"
                  htmlFor="Organisation Type"
                >
                  Organisation Type
                </InputLabel>
                <Select
                  required
                  error={errorMessage.orgType ? true : false}
                  labelId="organisation-type-label"
                  id="organisation-type"
                  value={type}
                  label="Organisation Type"
                  onChange={(e) => {
                    setType(e.target.value);
                    delete errorMessage.orgType;
                  }}
                >
                  <MenuItem value={'School'}>School</MenuItem>
                  <MenuItem value={'Retirement Home'}>Retirement Home</MenuItem>
                </Select>
              </FormControl>
              {errorMessage.orgType ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.orgType}
                </Alert>
              ) : null}
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organisation Name">
                Organisation Name
              </label>
              <TextField
                error={errorMessage.orgName ? true : false}
                required
                variant="outlined"
                id="filled-organisation-name-input"
                label="Organisation Name"
                autoComplete="current-organisation-name"
                onChange={(e) => {
                  setOrgName(e.target.value);
                  delete errorMessage.orgName;
                }}
                fullWidth
              />
              {errorMessage.orgName ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.orgName}
                </Alert>
              ) : null}
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Primary Contact Name">
                Primary Contact Name
              </label>
              <TextField
                required
                error={errorMessage.contactName ? true : false}
                variant="outlined"
                id="filled-primary-contact-name-input"
                label="Primary Contact Name"
                autoComplete="current-primary-contact-name"
                onChange={(e) => {
                  setContactName(e.target.value);
                  delete errorMessage.contactName;
                }}
                fullWidth
              />
              {errorMessage.contactName ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.contactName}
                </Alert>
              ) : null}
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organisation Address">
                Primary Contact Email
              </label>
              <TextField
                error={errorMessage.contactEmail ? true : false}
                required
                variant="outlined"
                id="filled-organisation-email-input"
                label="Primary Contact Email"
                autoComplete="current-organisation-email"
                onChange={(e) => {
                  setContactEmail(e.target.value);
                  delete errorMessage.contactEmail;
                }}
                fullWidth
              />
              {errorMessage.contactEmail ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.contactEmail}
                </Alert>
              ) : null}
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Primary Contact Number">
                Primary Contact Number
              </label>
              <TextField
                required
                error={errorMessage.phone ? true : false}
                variant="outlined"
                id="filled-primary-contact-number-input"
                label="Primary Contact Number"
                autoComplete="current-primary-contact-number"
                onChange={(e) => {
                  setContactNumber(e.target.value);
                  delete errorMessage.phone;
                }}
                fullWidth
              />
              {errorMessage.phone ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.phone}
                </Alert>
              ) : null}
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="email">
                Login Email
              </label>
              <TextField
                required
                error={errorMessage.email ? true : false}
                variant="outlined"
                id="filled-email-input"
                label="Login Email"
                type="email"
                autoComplete="current-email"
                onChange={(e) => {
                  setSignUpEmail(e.target.value);
                  delete errorMessage.email;
                }}
                fullWidth
              />
              {errorMessage.email ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.email}
                </Alert>
              ) : null}
            </Box>
            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="password">
                Password
              </label>
              <TextField
                required
                error={errorMessage.password ? true : false}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                  delete errorMessage.password;
                }}
                fullWidth
              />
              {errorMessage.password ? (
                <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
                  {errorMessage.password}
                </Alert>
              ) : null}
            </Box>
            <Button
              variant="outlined"
              sx={{ padding: 1.85 }}
              onClick={(e) => {
                e.preventDefault();
                checkErrors();
                if (error === false) {
                  signUp();
                }
                console.log('ERROR STATE', error);
              }}
              fullWidth
            >
              SIGN UP
            </Button>
          </form>
        </Card>
      </Container>
    </>
  );
}
