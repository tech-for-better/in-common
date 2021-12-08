import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function Login({ user }) {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  async function logIn() {
    try {
      await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
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
      <h2>{user?.email ? `${user?.email} logged in` : "no one logged in"}</h2>
    </div>
  );
}
