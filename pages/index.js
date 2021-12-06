import * as React from "react";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Button } from "@mui/material";

export default function Index() {
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          minWidth: 275,
          marginTop: 8,
          padding: 5,
          borderRadius: 3,
          bgcolor: "#EBFFFA",
          mt: 5,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            id="filled-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            fullWidth
            error
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            sx={{ bgcolor: "#C8F4EC" }}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
        </Box>
        <Button variant="outlined" sx={{ padding: 1.6 }} fullWidth>
          Login
        </Button>
      </Card>
    </Container>
  );
}
