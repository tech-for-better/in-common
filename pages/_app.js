import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { Router } from 'next/router';
import Header from '../components/Header/Header';
import '/styles/nprogress.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import nProgress from 'nprogress';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  // const [approved, setApproved] = useState(false);

  // useEffect(() => {
  //   if (user) {
  //     fetch(`/api/approvalByUid?uid=${user.uid}`)
  //       .then((data) => data.json())
  //       .then((json) => setApproved(json.approval));
  //   }
  // }, [user]);

  return (
    <>
      <Header user={user} />
      <Component {...pageProps} loading={loading} user={user} error={error} />
    </>
  );
}

export default MyApp;
