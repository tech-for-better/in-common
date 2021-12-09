import { base } from '../../lib/init-airtable';
import {
  Container,
  Box,
  Alert,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import { useState, useEffect } from 'react';

const tableEvents = base('Events');

const getEvents = async () => {
  return await tableEvents
    .select({
      view: 'Grid view',
    })
    .firstPage();
};

const getRecords = async (callback) => {
  const records = await callback;
  return records;
};

// getRecords(getEvents());

const getEventUidStatus = async (senderUID, status) => {
  return await tableEvents
    .select({
      view: 'Grid view',
      filterByFormula: `AND({Sender UID} = ${senderUID}, {Status} = ${status})`,
    })
    .firstPage();
};

getRecords(getEventUidStatus(1, `"Sent invite"`)).then((data) =>
  console.log('get my records', data)
);

const getMyPartnerUID = async (myUID) => {
  return await base('Accounts')
    .select({
      view: 'Grid view',
      fields: [''],
      filterByFormula: `{UID} = ${myUID}`,
    })
    .firstPage();
};
getRecords(getMyPartnerUID(1)).then((data) =>
  console.log('get my partner UID', data)
);

// getEvents();
// console.log('outside Component', getRecords());

export default function Events({ user }) {
  const [myEvents, setMyEvents] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getRecords(getEvents()).then((data) => setMyEvents(data));
  }, []);

  // console.log({ myEvents });

  return (
    <div>
      <h1>All Events</h1>
      {myEvents.map((record) => (
        <Container maxWidth="xs" key={record.id}>
          <Card
            sx={{
              minWidth: 275,
              marginTop: 8,
              padding: 5,
              borderRadius: 3,
              backgroundColor: '#bbc3c7',
              color: 'white',
              mt: 5,
            }}
          >
            <Card> Activity: {record.fields.Activity}</Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              {' '}
              Status: {record.fields.Status}
            </Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              {' '}
              Recipient: {record.fields.Recipient}
            </Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              {' '}
              Sender: {record.fields.Sender}
            </Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              Date Suggestions: {record.fields['Date Suggestions']}{' '}
            </Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              {' '}
              Duration: {record.fields.Duration}
            </Card>
            <Card
              sx={{
                marginTop: 2,
              }}
            >
              {' '}
              Group Size {record.fields['Group size']}
            </Card>
          </Card>
        </Container>
      ))}
    </div>
  );
}
