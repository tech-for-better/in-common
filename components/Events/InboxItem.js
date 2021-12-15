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
import { useState } from 'react';

export default function InboxItem({ record }) {
  const [confirmedDate, setConfirmedDate] = useState('');
  console.log(confirmedDate);
  return (
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
          Event Requested by {record.fields['Sender Organisation Name']} and
          Sent to {record.fields['Recipient Organisation Name']}
        </p>
        <p>
          The suggested Activity is {record.fields.Activity} with a group size
          of {record.fields['Group Size']} people
        </p>
        <Typography variant="h6">Please choose a date and time</Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth required>
            <InputLabel id="confirmed-date-label">
              Proposed dates and times
            </InputLabel>
            <Select
              labelId="confirmed-date-label"
              id="confirmed-date"
              value={confirmedDate}
              label="Proposed dates and times"
              onChange={(e) => {
                setConfirmedDate(e.target.value);
              }}
            >
              {JSON.parse(record.fields['Suggested Dates']).map((date) => (
                <MenuItem
                  key={moment(date).format('Do MMMM YYYY, h:mma')}
                  value={moment(date).format('Do MMMM YYYY, h:mma')}
                >
                  {moment(date).format('Do MMMM YYYY, h:mma')}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Card>
    </Container>
  );
}
