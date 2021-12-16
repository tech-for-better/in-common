import * as React from 'react';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Index({ user, error, loading }) {
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

  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login />
    </>
  );
}
