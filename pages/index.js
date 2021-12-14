import * as React from 'react';

import Login from '../components/Login/Login';
import Events from '../components/Events/Events';

export default function Index({ user }) {
  return user ? <Events user={user} /> : <Login />;
}
