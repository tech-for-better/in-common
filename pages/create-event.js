import { useState } from 'react';
import EventActivity from '../components/EventCreation/EventActivity';
import EventDate from '../components/EventCreation/EventDate';
import EventLocation from '../components/EventCreation/EventLocation';
import EventSummary from '../components/EventCreation/EventSummary';
import EventSize from '../components/EventCreation/EventSize';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';

export default function Events({ user, error, loading, root }) {
  const [stage, setStage] = useState(1);
  const [newEvent, setNewEvent] = useState({});
  const stages = 4;

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
    if (stage === 1)
      return (
       <EventActivity
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 2)
    return (
      <EventSize
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 3)
    return (
      <EventDate
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 4)
    return (
      <EventSummary
        user={user}
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
      );
  }

  return <Login root={root} />;
}
