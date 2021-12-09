import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { base } from '../lib/init-airtable';

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

  return <Component {...pageProps} user={user} approved={approved} />;
}

export default MyApp;
