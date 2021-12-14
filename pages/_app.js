import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { Router } from 'next/router';
import Header from '../components/Header/Header';
import '/styles/nprogress.css';
import nProgress from 'nprogress';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  // const [approved, setApproved] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // useEffect(() => {
  //   if (user) {
  //     fetch(`/api/approvalByUid?uid=${user.uid}`)
  //       .then((data) => data.json())
  //       .then((json) => setApproved(json.approval));
  //   }
  // }, [user]);

  console.log(user);
  return (
    <>
      <Header user={user} />
      <Component {...pageProps} user={user} />
    </>
  );
}

export default MyApp;
