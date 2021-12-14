import Events from '../components/Events/Events';
import Login from '../components/Login/Login';
import { useState, useEffect } from 'react';

export default function EventsPage({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`/api/eventsByUid?uid=${user.uid}`)
        .then((data) => data.json())
        .then((json) => setEvents(json.eventlist));
      /*Notes:
         result.map(
          if(Recipient UID = me && Status = "Sent") {inbox}
          if(Sender UID = me && Status = "Sent") {outbox}
          if(Recipient UID = me||Sender UID = me && Status = "Confirmed") {confirmed}
          if(Recipient UID = me||Sender UID = me && Status = "Completed") {completed}
          )
          */
    }
  }, [user]);

  console.log(events);
  return (
    <>
      {user?.email ? (
        <div>
          <h1>All Events</h1>

          <h2>All events</h2>
          <Events arr={events} />

          {/* <h2>Inbox</h2>
          <Events arr={inboxArr} />
          <Inbox arr={inbox} /> 

          <h2>Outbox</h2>
          <Events arr={outboxArr} />
           <Outbox arr={outbox} /> 

          <h2>Confirmed Events</h2>
          <Events arr={confirmedArr} />
          <Confirmed arr={confirmed} /> */}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
