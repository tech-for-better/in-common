import * as React from 'react';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';
import Events from '../components/Events/Events';

export default function Index({ user, error, loading, root }) {
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
    return <Events user={user} />;
  }

  return <Login root={root} />;
}
