import {
  Container,
  Box,
  Alert,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import moment from 'moment';
import InboxItem from './InboxItem';

export default function Inbox({ arr }) {
  // console.log(
  //   JSON.parse(arr[0].fields['Suggested Dates']).map((date) =>
  //     moment(date).format('Do MMMM YYYY, h:mma')
  //   )
  // );
  return (
    <div>
      {!arr ? (
        <p>No events yet</p>
      ) : (
        arr.map((record) => <InboxItem record={record} key={record.id} />)
      )}
    </div>
  );
}
