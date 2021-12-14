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
  const [approved, setApproved] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    try {
      if (user) {
        fetch(`/api/approvalByUid?uid=${user.uid}`)
          .then((data) => {
            if (!data.ok) {
              throw Error('Could not fetch the Data');
            }
            console.log(data);
            return data.json();
          })
          .then((json) => setApproved(json.approval));
      }
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Component {...pageProps} user={user} approved={approved} />
    </>
  );
}

export default MyApp;
