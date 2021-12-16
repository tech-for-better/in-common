import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useState, useEffect, useRef } from 'react';
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
  Stack,
} from '@mui/material';

import Error from '../Alert/Error';

export default function SignUpComponent() {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [orgType, setOrgType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [counter, setCounter] = useState(false);
  const [error, setError] = useState(true);
  const isMounted = useRef(false);
  // const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    EMAIL: false,
    PASSWORD: false,
    ORG_TYPE: false,
    ORG_NAME: false,
    CONTACT_EMAIL: false,
    CONTACT_NAME: false,
    CONTACT_NUMBER: false,
  });

  useEffect(() => {
    if (isMounted.current) {
      if (Object.values(errorMessage).every((item) => item === false)) {
        setError(false);
      }
    } else {
      isMounted.current = true;
    }
  }, [errorMessage]);

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
        'Organisation Type': orgType,
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

  function checkErrors() {
    setCounter((count) => (count += 1));
    const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,63}$');
    const phoneRegex = new RegExp(/^\d+$/);

    if (orgType.length < 1) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, ORG_TYPE: true };
      });
    }

    if (orgName.length < 1) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, ORG_NAME: true };
      });
    }

    if (contactName.length < 1) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, CONTACT_NAME: true };
      });
    }

    if (!emailRegex.test(contactEmail)) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, CONTACT_EMAIL: true };
      });
    }

    if (!phoneRegex.test(contactNumber)) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, CONTACT_NUMBER: true };
      });
    }

    if (!emailRegex.test(signUpEmail)) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, EMAIL: true };
      });
    }

    if (signUpPassword.length < 6) {
      setError(true);
      setErrorMessage((errorObject) => {
        return { ...errorObject, PASSWORD: true };
      });
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Card
          sx={{
            minWidth: 275,
            marginTop: 8,
            marginBottom: 8,
            padding: 5,
            borderRadius: 3,
            mt: 5,
          }}
        >
          <form>
            <Stack spacing={3}>
              <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                Sign up
              </Typography>

              <Box>
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
                    error={errorMessage.ORG_TYPE ? true : false}
                    labelId="organisation-type-label"
                    id="organisation-type"
                    value={orgType}
                    label="Organisation Type"
                    onChange={(e) => {
                      setOrgType(e.target.value);
                      setErrorMessage((errorObject) => {
                        return { ...errorObject, ORG_TYPE: false };
                      });
                    }}
                  >
                    <MenuItem value={'School'}>School</MenuItem>
                    <MenuItem value={'Retirement Home'}>
                      Retirement Home
                    </MenuItem>
                  </Select>
                </FormControl>
                {errorMessage.ORG_TYPE ? (
                  <Error>Please select an organisation type</Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="Organisation Name">
                  Organisation Name
                </label>
                <TextField
                  error={errorMessage.ORG_NAME ? true : false}
                  required
                  variant="outlined"
                  id="organisation-name-input"
                  label="Organisation Name"
                  autoComplete="current-organisation-name"
                  onChange={(e) => {
                    setOrgName(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, ORG_NAME: false };
                    });
                  }}
                  fullWidth
                />
                {errorMessage.ORG_NAME ? (
                  <Error>Please enter an organisation name</Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="Primary Contact Name">
                  Primary Contact Name
                </label>
                <TextField
                  required
                  error={errorMessage.CONTACT_NAME ? true : false}
                  variant="outlined"
                  id="primary-contact-name-input"
                  label="Primary Contact Name"
                  autoComplete="current-primary-contact-name"
                  onChange={(e) => {
                    setContactName(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, CONTACT_NAME: false };
                    });
                  }}
                  fullWidth
                />
                {errorMessage.CONTACT_NAME ? (
                  <Error>Please enter a contact name</Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="Organisation Address">
                  Primary Contact Email
                </label>
                <TextField
                  error={errorMessage.CONTACT_EMAIL ? true : false}
                  required
                  variant="outlined"
                  id="organisation-email-input"
                  label="Primary Contact Email"
                  autoComplete="current-organisation-email"
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, CONTACT_EMAIL: false };
                    });
                  }}
                  fullWidth
                />
                {errorMessage.CONTACT_EMAIL ? (
                  <Error>Email is not valid</Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="Primary Contact Number">
                  Primary Contact Number
                </label>
                <TextField
                  required
                  error={errorMessage.CONTACT_NUMBER ? true : false}
                  variant="outlined"
                  id="primary-contact-number-input"
                  label="Primary Contact Number"
                  autoComplete="current-primary-contact-number"
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, CONTACT_NUMBER: false };
                    });
                  }}
                  fullWidth
                />
                {errorMessage.CONTACT_NUMBER ? (
                  <Error>Phone number is not valid</Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="email">
                  Login Email
                </label>
                <TextField
                  required
                  error={errorMessage.EMAIL ? true : false}
                  variant="outlined"
                  id="email-input"
                  label="Login Email"
                  type="email"
                  autoComplete="current-email"
                  fullWidth
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, EMAIL: false };
                    });
                  }}
                />
                {errorMessage.EMAIL ? (
                  <Error>Login email is not valid </Error>
                ) : null}
              </Box>

              <Box>
                <label hidden htmlFor="password">
                  Password
                </label>
                <TextField
                  required
                  error={errorMessage.PASSWORD ? true : false}
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                    setErrorMessage((errorObject) => {
                      return { ...errorObject, PASSWORD: false };
                    });
                  }}
                />
                {errorMessage.PASSWORD ? (
                  <Error>Password needs to be at least 6 characters</Error>
                ) : null}
              </Box>

              <Button
                fullWidth
                variant="outlined"
                sx={{ padding: 1.85 }}
                onClick={(e) => {
                  e.preventDefault();
                  checkErrors();
                  if (!error) return console.log('YAY');
                  if (error) return console.log({ errorMessage });
                }}
              >
                SIGN UP
              </Button>
            </Stack>
          </form>
        </Card>
      </Container>
    </>
  );
}
