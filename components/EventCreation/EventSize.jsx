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
import { useState, useEffect } from 'react';
import HeadCreateEvent from './HeadCreateEvent';

export default function EventSize({
  stage,
  setStage,
  newEvent,
  setNewEvent,
  stages,
}) {
  const [disabled, setDisabled] = useState('true');

  useEffect(() => {
    newEvent.size ? setDisabled('') : setDisabled('true');
  }, [newEvent.size]);

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
        <HeadCreateEvent />
        <Stack spacing={3}>
          <Typography variant="h8">{`Step ${stage} of ${stages}`}</Typography>
          <Typography variant="h6">Group size</Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth required>
              <InputLabel id="size-select-label">Number of people</InputLabel>
              <Select
                labelId="size-select-label"
                id="size-select"
                value={newEvent.size}
                label="Number of people"
                onChange={handleChange}
              >
                <MenuItem value={'1-5'}>1 - 5</MenuItem>
                <MenuItem value={'6-10'}>6 - 10</MenuItem>
                <MenuItem value={'11-15'}>11 - 15</MenuItem>
                <MenuItem value={'16-20'}>16 - 20</MenuItem>
                <MenuItem value={'21-25'}>21 - 25</MenuItem>
                <MenuItem value={'26-30'}>26 - 30</MenuItem>
                <MenuItem value={'31-35'}>31 - 35</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            sx={{ padding: 1.85 }}
            onClick={() => setStage(stage + 1)}
            disabled={disabled}
          >
            Next
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
