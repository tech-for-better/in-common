import Login from '../components/Login/Login';
import { useState, useEffect } from 'react';
import Inbox from '../components/Events/Inbox';
import Outbox from '../components/Events/Outbox';
import Confirmed from '../components/Events/Confirmed';
import Loading from '../components/Loading/Loading';
<<<<<<< HEAD
import moment from 'moment';
import Head from 'next/head';
=======
>>>>>>> main
import { Card, Container, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> main

export default function EventsPage({ user, error, loading, root }) {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);
  const [confirmed, setConfirmed] = useState([]);

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
            if (futureDates.length === 0 && !item.fields['Confirmed Date']) {
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
              item.fields['Status'] === 'Confirmed' ||
              (item.fields['Status'] === 'Past' &&
                item.fields['Confirmed Date'])
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
         <>
            <Head>
              <title>Manage Events</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
          <Container component="main" maxWidth="xl">
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} lg={4} sx={{ marginBottom: 8 }}>
                <Inbox arr={inbox} />
              </Grid>
              <Grid item xs={12} md={12} lg={4} sx={{ marginBottom: 8 }}>
                <Outbox arr={outbox} />
              </Grid>
              <Grid item xs={12} md={12} lg={4} sx={{ marginBottom: 8 }}>
                <Confirmed arr={confirmed} />
              </Grid>
            </Grid>
          </Container>
  	    </>
        ) : (
          <Login />
        )}
      </>
    );
  }

  return <Login/>;
}
