import { Button } from '@mui/material';

export default function EventLocation({ stage, setStage }) {
  return (
    <>
      <p>Event Location</p>
      <p>{`Step ${stage} of 4`}</p>
      <Button variant="outlined" onClick={() => setStage(stage + 1)}>
        Next
      </Button>
    </>
  );
}
