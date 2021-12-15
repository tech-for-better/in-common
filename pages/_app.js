import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { Router } from 'next/router';
import Header from '../components/Header/Header';
import '/styles/nprogress.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import nProgress from 'nprogress';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


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
    <ThemeProvider theme={theme}>
      <Header user={user} />
      <Component {...pageProps} loading={loading} user={user} error={error} />
    </ThemeProvider>
  );
}

export default MyApp;
