import {
  Button,
  Container,
  Card,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import moment from 'moment';
import HeadCreateEvent from './HeadCreateEvent';

import { useState } from 'react';

export default function EventSummary({
  stage,
  setStage,
  setNewEvent,
  newEvent,
  stages,
  user,
}) {
  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, notes: e.target.value }));
  };

  const [loading, setLoading] = useState(false);

  async function addEvent() {
    const airtableUser = await fetch(`/api/userByUid?uid=${user.uid}`)
      .then((data) => data.json())
      .then((json) => json.airtableuser);

    console.log(airtableUser);

    const data = {
      Activity: newEvent.activity,
      Status: 'Sent',
      'Group Size': newEvent.size,
      Notes: newEvent.notes,
      'Suggested Dates': JSON.stringify(newEvent.date),
      'Sender UID': user.uid,
      'Sender Organisation Name': airtableUser['Organisation Name'],
      'Recipient UID': airtableUser['Partner UID'],
      'Recipient Organisation Name': airtableUser['Partner Organisation Name'],
    };

    await fetch('/api/createEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(setLoading(true));
  }

  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,
          mt: 5,
        }}
        variant="outlined"
      >
        <HeadCreateEvent />
        <Stack spacing={3}>
          <Typography variant="h8">{`Step ${stage} of ${stages}`}</Typography>
          <Typography variant="h6">Event Summary</Typography>
          <p>{`${newEvent.activity}`}</p>
          <p>Group size: {newEvent.size} people</p>
          <p>Proposed dates:</p>
          {newEvent.date.map((date, i) => (
            <p key={i}>{`${moment(date).format('LLL')}`}</p>
          ))}
          <TextField
            id="notes-label"
            label="Add notes"
            value={newEvent.notes}
            multiline
            rows={6}
            onChange={handleChange}
          />
          <Button
            sx={{ padding: 1.85 }}
            variant="outlined"
            onClick={async (e) => {
              e.preventDefault();
              await addEvent();
              setStage('submitted');
            }}
          >
            {loading ? 'Sending...' : 'Send Event Request'}
          </Button>
          <Button
            sx={{ padding: 1.85 }}
            variant="outlined"
            onClick={() => setStage(stage - 1)}
          >
            Back
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
