import {
  Container,
  Card,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Icon,
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
          backgroundColor: '#EBF9FF',
        }}
      >
        <Box>
          <Box
            sx={{
              mt: 3,
              justifyContent: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>
              For best support please click the link below to contact Incommon
            </h2>
          </Box>
          <Box
            sx={{
              mt: 2,
              justifyContent: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton style={{ color: '#f44336' }}>
              <Link href="https://incommon.org.uk/get-involved"> Contact</Link>
            </IconButton>
          </Box>
        </Box>
        <h4> Addresses:</h4>
        <Box>
          <p>InCommon 125 - 127 Mare Street London E8 3SJ</p>
        </Box>
      </Card>{' '}
    </Container>
  );
}
