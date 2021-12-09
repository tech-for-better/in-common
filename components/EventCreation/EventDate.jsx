import { Button } from '@mui/material';

export default function EventDate({ stage, setStage }) {
  return (
    <>
      <p>Event Date</p>
      <p>{`Step ${stage} of 4`}</p>
      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>
      <Button variant="outlined" onClick={() => setStage(stage + 1)}>
        Next
      </Button>
    </>
  );
}
