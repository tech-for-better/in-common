import { useState } from 'react';
import EventActivity from '../components/EventCreation/EventActivity';
import EventDate from '../components/EventCreation/EventDate';
import EventLocation from '../components/EventCreation/EventLocation';
import EventSummary from '../components/EventCreation/EventSummary';

export default function Events({ user }) {
  const [stage, setStage] = useState(1);
  const [newEvent, setNewEvent] = useState({});

  if (stage === 1)
    return (
      <EventLocation
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 2)
    return (
      <EventActivity
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 3)
    return (
      <EventDate
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 4)
    return (
      <EventSummary
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
}
