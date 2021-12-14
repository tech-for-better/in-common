import { useState } from 'react';
import EventActivity from '../components/EventCreation/EventActivity';
import EventDate from '../components/EventCreation/EventDate';
import EventLocation from '../components/EventCreation/EventLocation';
import EventSummary from '../components/EventCreation/EventSummary';
import EventSize from '../components/EventCreation/EventSize';

export default function Events({ user }) {
  const [stage, setStage] = useState(1);
  const [newEvent, setNewEvent] = useState({});
  const stages = 5;

  if (stage === 1)
    return (
      <EventLocation
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 2)
    return (
      <EventActivity
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 3)
    return (
      <EventSize
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 4)
    return (
      <EventDate
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
  if (stage === 5)
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
