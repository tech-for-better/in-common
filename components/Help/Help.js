import {
  Container,
  Card,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import Link from 'next/link';
export default function Help({ user }) {
  return (
    <Container component="main">
      <Card
        sx={{
          display: 'flex',

          minWidth: 275,
          marginTop: 8,
          marginBottom: 8,
          padding: 5,
          borderRadius: 3,
          mt: 5,
          width: 4 / 4,
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {' '}
        <h1 style={{ color: '#f44336' }}> Addresses:</h1>
        <Box>
          <Box>
            {' '}
            <h4>InCommon 125 - 127 Mare Street London E8 3SJ</h4>{' '}
          </Box>
        </Box>
        <IconButton>
          <Link href="https://incommon.org.uk/get-involved"> Contact</Link>
        </IconButton>
      </Card>{' '}
    </Container>
  );
}
