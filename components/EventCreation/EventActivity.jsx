import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

export default function EventActivity({
  stage,
  setStage,
  newEvent,
  setNewEvent,
}) {
  console.log({ newEvent });

  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, activity: e.target.value }));
  };

  return (
    <>
      <p>Event Activity</p>
      <p>{`Step ${stage} of 4`}</p>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth required>
          <InputLabel id="activity-select-label">Activity</InputLabel>
          <Select
            labelId="activity-select-label"
            id="activity-simple-select"
            value={newEvent.activity}
            label="Activity"
            onChange={handleChange}
          >
            <MenuItem value={'Reading'}>Reading</MenuItem>
            <MenuItem value={'Interview'}>Interview</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>
      <Button variant="outlined" onClick={() => setStage(stage + 1)}>
        Next
      </Button>
    </>
  );
}
