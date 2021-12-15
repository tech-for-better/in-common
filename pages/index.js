import * as React from 'react';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';
import { useRouter } from 'next/router';

export default function Index({ user, error, loading, root }) {
  const router = useRouter();

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
    router.push('/events');
    return <></>;
  }

  return <Login root={root} />;
}
