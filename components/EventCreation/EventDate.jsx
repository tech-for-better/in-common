import { Button, Container, Stack, Card, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import HeadCreateEvent from './HeadCreateEvent';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { useState, useEffect } from 'react';

export default function EventDate({
  stage,
  setStage,
  newEvent,
  setNewEvent,
  stages,
}) {
  const [value, setValue] = useState(new Date());

  const [disabled, setDisabled] = useState('true');

  useEffect(() => {
    console.log(newEvent.date);
    newEvent.date && newEvent.date.length > 0
      ? setDisabled('')
      : setDisabled('true');
  }, [newEvent.date]);

  function addDate() {
    if (newEvent.date) {
      if (!newEvent.date.includes(value)) {
        setNewEvent((currentEvent) => {
          return { ...currentEvent, date: [...currentEvent.date, value] };
        });
      } else {
        alert('date already added');
      }
    } else {
      setNewEvent((currentEvent) => {
        return { ...currentEvent, date: [value] };
      });
    }
  }

  function deleteDate(dateToDelete) {
    const newArray = newEvent.date.filter((date) => date !== dateToDelete);
    setNewEvent((currentEvent) => {
      return { ...currentEvent, date: newArray };
    });
  }

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
          <Typography variant="h6">Event Date</Typography>

          {newEvent.date
            ? newEvent.date.map((date, i) => (
                <>
                  <p key={i}>{`${moment(date).format('LLL')}`}</p>
                  <Button onClick={() => deleteDate(date)} variant="outlined">
                    delete
                  </Button>
                </>
              ))
            : null}

          <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              format="DD-MM-YY"
              inputFormat="dd/MM/yyyy hh:mm a"
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>

          <Button
            sx={{ padding: 1.85, borderRadius: 2 }}
            variant="contained"
            onClick={() => addDate()}
            elevation={0}
          >
            Add Date
          </Button>

          <Button
            sx={{ padding: 1.85, borderRadius: 2 }}
            variant="outlined"
            ele
            disabled={disabled}
            onClick={() => setStage(stage + 1)}
            endIcon={<NavigateNextIcon />}
          >
            Next
          </Button>
          <Button
            sx={{ padding: 1.85, borderRadius: 2 }}
            variant="outlined"
            onClick={() => setStage(stage - 1)}
            startIcon={<NavigateBeforeIcon />}
          >
            Back
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
