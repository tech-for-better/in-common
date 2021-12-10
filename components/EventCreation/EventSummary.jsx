import { Button, Container, Card, Stack, Typography } from '@mui/material';
import moment from 'moment';

export default function EventSummary({ stage, setStage, newEvent }) {
  console.log({ newEvent });
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,
          mt: 5,
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h8">{`Step ${stage} of 4`}</Typography>
          <Typography variant="h6">Event Summary</Typography>
          <p>{`${newEvent.activity} at ${newEvent.location}`}</p>
          <p>Proposed dates:</p>
          {newEvent.date.map((date, i) => (
            <p key={i}>{`${moment(date).format('LLL')}`}</p>
          ))}
          <Button
            sx={{ padding: 1.85 }}
            variant="outlined"
            onClick={() => setStage(stage - 1)}
          >
            Back
          </Button>
          <Button
            sx={{ padding: 1.85 }}
            variant="outlined"
            onClick={() => console.log('submit')}
          >
            Submit
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
