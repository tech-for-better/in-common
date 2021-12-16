import { Button, Container, Card, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function EventSubmitted({}) {
  const router = useRouter();
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
            Event Request Sent!
          </Typography>

          <Button
            sx={{ padding: 1.85, borderRadius: 2 }}
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              router.push('/events');
            }}
          >
            Return to Events
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
