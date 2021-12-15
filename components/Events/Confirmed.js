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

export default function Confirmed({ arr }) {
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
                {record.fields.Activity} with{' '}
                {record.fields['Recipient Organisation Name']} and{' '}
                {record.fields['Sender Organisation Name']} on{' '}
                {moment(record.fields['Confirmed Date']).format(
                  'Do MMMM YYYY, h:mma'
                )}
              </p>
              <p>Group size: {record.fields['Group Size']} people</p>
              <Typography variant="h6">Notes:</Typography>
              <p>{record.fields.Notes}</p>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
