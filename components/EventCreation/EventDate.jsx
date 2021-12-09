import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useState } from 'react';

export default function EventDate({ stage, setStage, newEvent, setNewEvent }) {
  const handleChange = (e) => {
    setNewEvent((oldEvent) => ({
      ...oldEvent,
      date: value,
    }));
  };

  const [value, setValue] = useState(new Date());
  const [elementCount, setElementCount] = useState(1);

  // const DatePicker = (i) => {
  //   return (
  //     <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
  //       <DateTimePicker
  //         renderInput={(props) => <TextField {...props} />}
  //         label="DateTimePicker"
  //         value={value[i]}
  //         inputFormat="dd/MM/yyyy hh:mm a"
  //         onChange={(newValue) => {
  //           setValue((oldValue) => [newValue]);
  //         }}
  //       />
  //     </LocalizationProvider>
  //   );
  // };

  return (
    <>
      <p>Event Date</p>
      <p>{`Step ${stage} of 4`}</p>

      <Button
        variant="outlined"
        onClick={() => setElementCount(elementCount + 1)}
      >
        Add Date
      </Button>

      {/* {[...Array(elementCount)].map((_, i) => (
        <DatePicker key={i} />
      ))} */}

      <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value[0]}
          inputFormat="dd/MM/yyyy hh:mm a"
          onChange={(newValue) => {
            setValue((oldValue) => [newValue]);
          }}
        />
      </LocalizationProvider>

      <Button variant="outlined" onClick={() => setStage(stage - 1)}>
        Back
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          handleChange();
          setStage(stage + 1);
        }}
      >
        Next
      </Button>
    </>
  );
}
