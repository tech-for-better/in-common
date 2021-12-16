import {
  Container,
  Card,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Icon,
} from '@mui/material';
import Link from 'next/link';

export default function Help({ user }) {
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          display: 'flex',

          minWidth: 275,
          marginTop: 8,
          marginBottom: 8,
          padding: 5,
          paddingTop: 3,
          borderRadius: 3,
          mt: 5,
          width: 4 / 4,
          flexDirection: 'column',
          flex: 1,
        }}
        variant="outlined"
      >
        <Box>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 3,
            }}
          ></Box>
        </Box>
        <Typography variant="h8">Postal Address:</Typography>
        <Box>
          <p>
            InCommon 125 - 127
            <br /> Mare Street <br /> London <br /> E8 3SJ
          </p>
        </Box>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h8">
            For support please click the link below to contact InCommon
          </Typography>
        </Box>
        <Button fullWidth variant="outlined" sx={{ borderRadius: 2 }}>
          <Link href="https://incommon.org.uk/get-involved"> Contact</Link>
        </Button>
      </Card>{' '}
    </Container>
  );
}
