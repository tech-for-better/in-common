import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Card,
  Container,
  Stack,
} from '@mui/material';
import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HeadCreateEvent from './HeadCreateEvent';

export default function EventActivity({
  stage,
  setStage,
  newEvent,
  setNewEvent,
  stages,
}) {
  const [disabled, setDisabled] = useState('true');

  useEffect(() => {
    newEvent.activity ? setDisabled('') : setDisabled('true');
  }, [newEvent.activity]);

  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({ ...oldEvent, activity: e.target.value }));
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
        variant="outlined"
      >
        <HeadCreateEvent />
        <Stack spacing={3}>
          <Typography variant="h8">{`Step ${stage} of ${stages}`}</Typography>
          <Typography variant="h6">Event Activity</Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth required>
              <InputLabel id="activity-select-label">Activity</InputLabel>
              <Select
                sx={{ borderRadius: 2 }}
                labelId="activity-select-label"
                id="activity-select"
                value={newEvent.activity}
                label="Activity"
                onChange={handleChange}
              >
                <MenuItem value={'Intergenerational Event'}>
                  Intergenerational Event
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{ padding: 1.85, borderRadius: 2 }}
            variant="outlined"
            onClick={() => setStage(stage + 1)}
            disabled={disabled}
            endIcon={<NavigateNextIcon />}
          >
            Next
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
