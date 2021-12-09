import { Button } from '@mui/material';

export default function EventSummary({ stage, setStage, newEvent }) {
  console.log({ newEvent });
  return (
    <>
      <p>Event Summary</p>
      <p>{`Step ${stage} of 4`}</p>
      <p>{`${newEvent.activity} at ${newEvent.location}`}</p>
      <p>Proposed dates:</p>
      {newEvent.date.map((date, i) => (
        <p key={i}>{`${date}`}</p>
      ))}
      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>
      <Button variant="outlined" onClick={() => console.log('submit')}>
        Submit
      </Button>
    </>
  );
}
