import { base } from '../../lib/init-airtable';
import { Container, Box, Alert } from '@mui/material';
import { useState, useEffect } from 'react';

const tableEvents = base('Events');

const getEvents = async () => {
  return await tableEvents
    .select({ maxRecords: 3, view: 'Grid view' })
    .firstPage();
};

const getRecords = async () => {
  const records = await getEvents();
  return records;
};

getRecords();

// getEvents();
console.log('outside Component', getRecords());

export default function Events({ user }) {
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    getRecords().then((data) => setMyEvents(data));
  }, []);

  console.log({ myEvents });

  return (
    <div>
      <h1>Hello</h1>
      {myEvents.map((record) => (
        <Container maxWidth="xs" key={record.id}>
          <div>
            Activity: {record.fields.Activity}, Status: {record.fields.Status},
            Recipient: {record.fields.Recipient}, sender: {record.fields.Sender}
          </div>
        </Container>
      ))}
    </div>
  );
}
