import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Button, TextField, Card, IconButton } from '@mui/material';

const Navigation = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ background: '#EBEFFF', color: 'white' }}
    >
      <Card sx={{ mb: 3, padding: 5 }}>
        <h2 style={{ color: '#36426C' }}>Control Panel</h2>
        <p style={{ color: '#36426C' }}>
          What would you like to do? Use the options below to organise an event
          and much more.
        </p>
      </Card>
      <Card sx={{ mb: 3 }}>
        <IconButton>
          <Link href="/"> Home</Link>
        </IconButton>
      </Card>

      <Card sx={{ mb: 3 }}>
        <IconButton>
          <Link href="/">create event</Link>
        </IconButton>
      </Card>

      <Card sx={{ mb: 3 }}>
        <IconButton>
          <Link href="/events"> Mange Events</Link>
        </IconButton>
      </Card>

      <Card sx={{ mb: 3 }}>
        <IconButton>
          <Link href="*"> Edit Profile</Link>
        </IconButton>
      </Card>
    </Container>
  );
};

export default Navigation;
