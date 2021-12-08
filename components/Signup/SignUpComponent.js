import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { useState } from "react";
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
} from "@mui/material";

///importing the confirmation file

export default function SignUpComponent({ user, setUser }) {
  console.log("user access from sign-up -->", user);

  //auth state listener

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  // signup for states

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [type, setType] = useState("");

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      // console.log("signUp fct", user.user.uid);
      alert("you are signed up");
    } catch (error) {
      console.log(error);
      alert("sorry we could not sign you up");
    }
  }
  async function logOut() {
    try {
      await signOut(auth);
      console.log("signed out!");
    } catch (error) {
      console.log(error);
    }
  }

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
              <FormControl fullWidth>
                <InputLabel
                  hidden
                  id="organization-type"
                  htmlFor="Organization Type"
                >
                  Organization Type
                </InputLabel>
                <Select
                  labelId="organization-type-label"
                  id="rganization-type"
                  value={type}
                  label="Organization Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"School"}>School</MenuItem>
                  <MenuItem value={"RetirementHome"}>Retirement Home</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organization Name">
                Organization Name
              </label>
              <TextField
                variant="outlined"
                id="filled-organization-name-input"
                label="Organization Name"
                autoComplete="current-organization-name"
                onChange={(e) => setSignUpEmail(e.target.value)}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <label hidden htmlFor="Organization Address">
                Organization Address
              </label>
              <TextField
                variant="outlined"
                id="filled-organization-address-input"
                label="Organization Address"
                autoComplete="current-organization-address"
                onChange={(e) => setSignUpEmail(e.target.value)}
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
                onChange={(e) => setSignUpEmail(e.target.value)}
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
                onChange={(e) => setSignUpEmail(e.target.value)}
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
