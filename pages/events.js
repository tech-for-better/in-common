import Login from '../components/Login/Login';
import { useState, useEffect } from 'react';
import Inbox from '../components/Events/Inbox';
import Outbox from '../components/Events/Outbox';
import Confirmed from '../components/Events/Confirmed';
import Loading from '../components/Loading/Loading';
import moment from 'moment';
import Head from 'next/head';

export default function EventsPage({ user, error, loading, root }) {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [past, setPast] = useState([]);

  const pastIds = [];
  async function pastEventsUpdateStatus(arr) {
    const data = {
      recordIds: arr,
    };
    await fetch('/api/pastEventsUpdateStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  useEffect(() => {
    if (user) {
      fetch(`/api/eventsByUid?uid=${user.uid}`)
        .then((data) => data.json())
        .then((json) => json.eventlist)
        .then((eventlist) => {
          eventlist.map((item) => {
            const futureDates = JSON.parse(
              item.fields['Suggested Dates']
            ).filter((date) => moment(date) > moment());
            if (futureDates.length === 0) {
              setPast((past) => [...past, item]);
              pastIds.push(item.id);
            } else if (
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
        })
        .then(() => pastEventsUpdateStatus(pastIds));
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <>
        {user ? (
          <div>
            <Head>
              <title>Manage Events</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <h1>All Events</h1>

            <h2>Inbox</h2>
            <Inbox arr={inbox} />

            <h2>Outbox</h2>
            <Outbox arr={outbox} />

            <h2>Confirmed Events</h2>
            <Confirmed arr={confirmed} />

            <h2>Past Plans</h2>
            <Confirmed arr={past} />
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }

  return <Login root={root} />;
}
