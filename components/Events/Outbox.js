import {
  Container,
  Box,
  Alert,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import moment from 'moment';

export default function Outbox({ arr }) {
  return (
    <div>
      {arr.length === 0 ? (
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
              <p>
                Event sent to {record.fields['Recipient Organisation Name']}
              </p>
              <p>
                The suggested Activity is {record.fields.Activity} with a group
                size of {record.fields['Group Size']} people
              </p>
              <Typography variant="h6">
                You suggested these dates and times
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                {JSON.parse(record.fields['Suggested Dates']).map((date) => (
                  <p key={date}>{moment(date).format('Do MMMM YYYY, h:mma')}</p>
                ))}
              </Box>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
