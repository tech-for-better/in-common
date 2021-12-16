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
  Stack,
} from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function InboxItem({ record }) {
  const [confirmedDate, setConfirmedDate] = useState('');

  async function addConfirm() {
    const data = {
      recordId: record.id,
      confirmedDate,
      status: 'Confirmed',
    };

    await fetch('/api/confirmEventDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async function decline() {
    const data = {
      recordId: record.id,
      confirmedDate: '1111-01-01T11:11:00.000Z',
      status: 'Cancelled',
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
    <Container key={record.id} maxWidth="xs">
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
          <b>Request from -</b> {record.fields['Sender Organisation Name']}
        </Typography>
        <br />
        <Typography variant="body1">
          <LocalActivityIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
          <b>Activity -</b> {record.fields.Activity}
        </Typography>
        <br />
        <Typography variant="body1">
          <GroupIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
          <b>Group Size -</b> {record.fields['Group Size']} people
        </Typography>
        <br />
        <Typography variant="body1">
          <DescriptionIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
          <b>Notes -</b> {record.fields.Notes}
        </Typography>
        <br />
        <Typography variant="body1">
          <DateRangeIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
          Please confirm a date and time
        </Typography>
        <Box sx={{ minWidth: 120, mt: 3 }}>
          <FormControl fullWidth required>
            <InputLabel id="confirmed-date-label">
              Proposed dates and times
            </InputLabel>
            <Stack spacing={3}>
              <Select
                labelId="confirmed-date-label"
                id="confirmed-date"
                value={confirmedDate}
                label="Proposed dates and times"
                onChange={(e) => {
                  setConfirmedDate(e.target.value);
                }}
                sx={{ borderColor: '#7C83FD', color: '#7C83FD' }}
              >
                {JSON.parse(record.fields['Suggested Dates']).map((date) => (
                  <MenuItem key={date} value={date}>
                    {moment(date).format('Do MMMM YYYY, h:mma')}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </FormControl>
          <Button
            sx={{ padding: 1.85, borderColor: '#7C83FD', color: '#3181f5' }}
            type="submit"
            variant="outlined"
            onClick={(e) => {
              addConfirm();
              window.location.reload(false);
            }}
          >
            Confirm
          </Button>
          <Button
            sx={{ padding: 1.85, borderColor: '#7C83FD', color: '#3181f5' }}
            variant="outlined"
            onClick={(e) => {
              decline();
              window.location.reload(false);
            }}
          >
            Decline
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
