import Events from '../components/Events/Events';
import Login from '../components/Login/Login';

export default function EventsPage({ user }) {
  return <>{user?.email ? <Events user={user} /> : <Login />}</>;
}
