import Login from '../components/Login/Login';
import { useState, useEffect } from 'react';
import Inbox from '../components/Events/Inbox';
import Outbox from '../components/Events/Outbox';
import Confirmed from '../components/Events/Confirmed';

export default function EventsPage({ user }) {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);
  const [confirmed, setConfirmed] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`/api/eventsByUid?uid=${user.uid}`)
        .then((data) => data.json())
        .then((json) => json.eventlist)
        .then((eventlist) => {
          eventlist.map((item) => {
            if (
              item.fields['Recipient UID'] === user.uid &&
              item.fields['Status'] === 'Sent'
            ) {
              setInbox((inbox) => [...inbox, item]);
            } else if (
              item.fields['Sender UID'] === user.uid &&
              item.fields['Status'] === 'Sent'
            ) {
              setOutbox((outbox) => [...outbox, item]);
            } else if (
              (item.fields['Recipient UID'] === user.uid ||
                item.fields['Sender UID'] === user.uid) &&
              item.fields['Status'] === 'Confirmed'
            ) {
              setConfirmed((confirmed) => [...confirmed, item]);
            }
          });
        });
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div>
          <h1>All Events</h1>

          <h2>Inbox</h2>
          <Inbox arr={inbox} />

          <h2>Outbox</h2>
          <Outbox arr={outbox} />

          <h2>Confirmed Events</h2>
          <Confirmed arr={confirmed} />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
