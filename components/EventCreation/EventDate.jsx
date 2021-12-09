import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { useState } from 'react';

export default function EventDate({ stage, setStage, newEvent, setNewEvent }) {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <p>Event Date</p>
      <p>{`Step ${stage} of 4`}</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
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
