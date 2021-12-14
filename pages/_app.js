import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { base } from '../lib/init-airtable';
import { Router } from 'next/router';
import Header from '../components/Header/Header';
import '/styles/nprogress.css';
import nProgress from 'nprogress';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});
  const [approved, setApproved] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    // if (currentUser) {
    //   base('Accounts')
    //     .select({
    //       filterByFormula: `UID = "${currentUser.uid}"`,
    //     })
    //     .firstPage((err, records) => {
    //       if (err) return console.log('Airtable error :', err);
    //       if (records) return setApproved(records[0].fields.Approval);
    //     });
    // }
  });

  return (
    <>
      <Header user={user} />
      <Component {...pageProps} user={user} approved={approved} />
    </>
  );
}

export default MyApp;
