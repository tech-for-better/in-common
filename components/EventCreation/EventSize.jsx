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

export default function EventSize({ stage, setStage, newEvent, setNewEvent }) {
  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, size: e.target.value }));
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
          <Typography variant="h6">Group size</Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Number of people
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newEvent.size}
                label="Number of people"
                onChange={handleChange}
              >
                <MenuItem value={'1-5'}>0-5</MenuItem>
                <MenuItem value={'5-10'}>5-10</MenuItem>
                <MenuItem value={'10-15'}>10-15</MenuItem>
                <MenuItem value={'15-10'}>15-20</MenuItem>
                <MenuItem value={'20-25'}>20-25</MenuItem>
                <MenuItem value={'25-30'}>25-30</MenuItem>
                <MenuItem value={'30-35'}>30-35</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            sx={{ padding: 1.85 }}
            onClick={() => setStage(stage + 1)}
          >
            Next
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
