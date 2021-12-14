import {
  Container,
  Box,
  Alert,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';

export default function Events({ arr }) {
  return (
    <div>
      {!arr ? (
        <p>No events yet</p>
      ) : (
        arr.map((record) => (
          <Container maxWidth="xs" key={record.id}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: 8,
                padding: 5,
                borderRadius: 3,
                backgroundColor: '#bbc3c7',
                color: 'white',
                mt: 5,
              }}
            >
              <Card> Activity: {record.fields.Activity}</Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                {' '}
                Status: {record.fields.Status}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                {' '}
                Recipient: {record.fields.Recipient}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                {' '}
                Sender: {record.fields.Sender}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                Date Suggestions: {record.fields['Date Suggestions']}{' '}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                {' '}
                Duration: {record.fields.Duration}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                {' '}
                Group Size: {record.fields['Group size']}
              </Card>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
