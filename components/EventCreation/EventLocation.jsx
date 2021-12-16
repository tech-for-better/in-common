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
import MenuDropDown from '../Menu/MenuDropDown';
import Header from '../Header/Header';
import HeadCreateEvent from './HeadCreateEvent';

import { useState, useEffect } from 'react';

export default function EventLocation({
  stage,
  setStage,
  newEvent,
  setNewEvent,
  stages,
}) {
  const [disabled, setDisabled] = useState('true');

  useEffect(() => {
    newEvent.location ? setDisabled('') : setDisabled('true');
  }, [newEvent.location]);

  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, location: e.target.value }));
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Card
          elevation={1}
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
            <Typography variant="h6">Event Location</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth required>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
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
              disabled={disabled}
              variant="outlined"
              sx={{ padding: 1.85 }}
              onClick={() => setStage(stage + 1)}
            >
              Next
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
