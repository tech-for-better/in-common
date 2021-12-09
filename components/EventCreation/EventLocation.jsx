import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

export default function EventLocation({
  stage,
  setStage,
  newEvent,
  setNewEvent,
}) {
  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, location: e.target.value }));
  };

  return (
    <>
      <p>Event Location</p>
      <p>{`Step ${stage} of 4`}</p>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth required>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newEvent.location}
            label="Location"
            onChange={handleChange}
          >
            <MenuItem value={'School'}>School</MenuItem>
            <MenuItem value={'Retirement Home'}>Retirement Home</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="outlined" onClick={() => setStage(stage + 1)}>
        Next
      </Button>
    </>
  );
}
