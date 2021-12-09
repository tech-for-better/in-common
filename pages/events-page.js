import EventManagement from '../components/EventManagement/EventManagement';

export default function EventsPage({ user }) {
  return (
    <>
      <EventManagement user={user} />{' '}
    </>
  );
}
