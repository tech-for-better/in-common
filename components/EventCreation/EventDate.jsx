import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useState } from 'react';

export default function EventDate({ stage, setStage, newEvent, setNewEvent }) {
  const [value, setValue] = useState(new Date());

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
    <>
      <p>Event Date</p>
      <p>{`Step ${stage} of 4`}</p>

      {newEvent.date
        ? newEvent.date.map((date) => (
            <>
              <p key={date}>{`${date}`}</p>
              <button onClick={() => deleteDate(date)}>delete</button>
            </>
          ))
        : null}

      <Button variant="outlined" onClick={() => addDate()}>
        Add Date
      </Button>

      <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value}
          inputFormat="dd/MM/yyyy hh:mm a"
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>

      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>

      <Button variant="outlined" onClick={() => setStage(stage + 1)}>
        Next
      </Button>
    </>
  );
}
