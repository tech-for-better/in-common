import Events from '../components/Events/Events';

export default function EventsPage({ user }) {
  return (
    <>
      <Events user={user} />{' '}
    </>
  );
}
