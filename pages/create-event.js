import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EventActivity from '../components/EventCreation/EventActivity';
import EventDate from '../components/EventCreation/EventDate';
import EventLocation from '../components/EventCreation/EventLocation';
import EventSummary from '../components/EventCreation/EventSummary';
import EventSize from '../components/EventCreation/EventSize';

export default function Events({ user, approved }) {
  const [stage, setStage] = useState(1);
  const [newEvent, setNewEvent] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!user && !approved) router.push('/login');
    if (user && !approved) router.push('/approval');
  }, [user, approved, router]);

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
        stages={stages}
        setStage={setStage}
        stage={stage}
        setNewEvent={setNewEvent}
        newEvent={newEvent}
      />
    );
}
