import InboxItem from './InboxItem';
import { Card, Container, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

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
            backgroundColor: '#8e4bfe',
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
        <p>Nothing in Inbox</p>
      ) : (
        arr.map((record) => <InboxItem record={record} key={record.id} />)
      )}
    </>
  );
}
