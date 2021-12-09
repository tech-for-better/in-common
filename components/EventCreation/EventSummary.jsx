import { Button } from '@mui/material';

export default function EventSummary({
  stage,
  setStagem,
  newEvent,
  setNewEvent,
}) {
  console.log({ newEvent });
  return (
    <>
      <p>Event Summary</p>
      <p>{`Step ${stage} of 4`}</p>
      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>
      <Button variant="outlined" onClick={() => console.log('submit')}>
        Submit
      </Button>
    </>
  );
}
