import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useState } from 'react';

export default function EventDate({ stage, setStage, newEvent, setNewEvent }) {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <p>Event Date</p>
      <p>{`Step ${stage} of 4`}</p>
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
