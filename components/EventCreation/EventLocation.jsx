import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Card,
  Container,
  Stack,
  Typography,
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
          <Typography variant="h6">Event Location</Typography>
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
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setStage(stage + 1)}
          >
            Next
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
