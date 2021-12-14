import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { base } from '../lib/init-airtable';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [approved, setApproved] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
      fetch(`/api/hello?uid=${user.uid}`)
        .then((data) => data.json())
        .then((json) => console.log(json));
      // (async () => {
      //   try {
      //     base('Accounts')
      //       .select({
      //         filterByFormula: `UID = "${user.uid}"`,
      //       })
      //       .firstPage((err, records) => {
      //         if (err) return console.log('Airtable error :', err);
      //         if (records) {
      //           setApproved(records[0].fields.Approval);
      //         }
      //       });
      //   } catch (error) {
      //     console.log(error);
      //   }
      // })();
    }
  }, [user]);

  return <Component {...pageProps} user={user} approved={approved} />;
}

export default MyApp;
