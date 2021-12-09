import { base } from '../../lib/init-airtable';
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
        <p key={record.id}>
          Activity: {record.fields.Activity}, Status: {record.fields.Status}
        </p>
      ))}
    </div>
  );
}
