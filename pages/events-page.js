import Event from '../components/Events/Event';

export default function EventsPage({ user }) {
  return (
    <>
      <Event user={user} />{' '}
    </>
  );
}
