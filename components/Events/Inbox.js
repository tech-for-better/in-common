import InboxItem from './InboxItem';
import { Card, Container, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Inbox({ arr }) {
  return (
    <>
      <Container maxWidth="xs">
        <Card
          sx={{
            minWidth: 275,
            marginTop: 8,
            padding: 2,
            marginBottom: -6,
            borderRadius: 3,
            mt: 3,
            borderWidth: 0,
            backgroundColor: '#7C83FD',
            color: 'white',
          }}
          variant="outlined"
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Inbox
          </Typography>
        </Card>
      </Container>
      {arr.length === 0 || !arr ? (
        <Container maxWidth="xs">
          <Card
            sx={{
              minWidth: 275,
              marginTop: 8,
              padding: 5,
              borderRadius: 3,
              mt: 3,
              borderColor: '#7C83FD',
            }}
            variant="outlined"
          >
            <Typography variant="body1">
              <MailIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
              <b>Empty Inbox</b>
            </Typography>
          </Card>
        </Container>
      ) : (
        arr.map((record) => <InboxItem record={record} key={record.id} />)
      )}
    </>
  );
}
