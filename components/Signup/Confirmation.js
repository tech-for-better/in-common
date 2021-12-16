import { Container, Card, Stack, Typography } from '@mui/material';

export default function Confirmation() {
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,
          mt: 5,
        }}
        variant="outlined"
      >
        <Stack spacing={3}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Sign-up Received
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            We will verify your account very soon!
          </Typography>
        </Stack>
      </Card>
    </Container>
  );
}
