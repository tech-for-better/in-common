import Events from '../components/Events/Events';
import Login from '../components/Login/Login';
import { useState, useEffect } from 'react';
import Inbox from '../components/Events/Inbox';

export default function EventsPage({ user }) {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  // const [events, setEvents] = useState([]);
  // const inboxArr = [];
  // const outboxArr = [];
  // const confirmedArr = [];

  useEffect(() => {
    if (user) {
      fetch(`/api/eventsByUid?uid=${user.uid}`)
        .then((data) => data.json())
        .then((json) => json.eventlist)
        .then((eventlist) => {
          // setEvents(json.eventList)
          // console.log(json.eventlist);
          eventlist.map((item) => {
            // console.log(item);

            if (
              item.fields['Recipient UID'] === user.uid &&
              item.fields['Status'] === 'Sent'
            ) {
              setInbox((inbox) => [...inbox, item]);
              // inboxArr.push(item);
            } else if (
              item.fields['Sender UID'] === user.uid &&
              item.fields['Status'] === 'Sent'
            ) {
              setOutbox((outbox) => [...outbox, item]);
              // outboxArr.push(item);
            } else if (
              (item.fields['Recipient UID'] === user.uid ||
                item.fields['Sender UID'] === user.uid) &&
              item.fields['Status'] === 'Confirmed'
            ) {
              setConfirmed((confirmed) => [...confirmed, item]);
              // confirmedArr.push(item);
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
          <Events arr={inbox} />
          {/* <Events arr={inboxArr} /> */}

          <h2>Outbox</h2>
          <Events arr={outbox} />
          {/* <Events arr={outboxArr} /> */}

          <h2>Confirmed Events</h2>
          <Events arr={confirmed} />
          {/* <Events arr={confirmedArr} /> */}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
