import {
  Container,
  Box,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
} from '@mui/material';
import moment from 'moment';
import { useState } from 'react';

export default function InboxItem({ record }) {
  const [confirmedDate, setConfirmedDate] = useState('');

  async function addConfirm() {
    const data = {
      recordId: record.id,
      confirmedDate,
    };

    await fetch('/api/confirmEventDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

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
        <p>Notes:</p>
        <p>{record.fields.Notes}</p>
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
                <MenuItem key={date} value={date}>
                  {moment(date).format('Do MMMM YYYY, h:mma')}
                </MenuItem>
              ))}
            </Select>
            <Button
              sx={{ padding: 1.85 }}
              variant="outlined"
              onClick={(e) => {
                console.log('running confirm');
                addConfirm();
                window.location.reload(false);
              }}
            >
              Confirm
            </Button>
          </FormControl>
        </Box>
      </Card>
    </Container>
  );
}
