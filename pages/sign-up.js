import SignUpComponent from '../components/Signup/SignUpComponent';
import Confirmation from '../components/Signup/Confirmation';
import Head from 'next/head';

export default function Signup({ user }) {
  return (
    <>
      {user ? (
        <>
          <Head>
            <title>Sign Up Received</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="robots" content="noindex"></meta>
          </Head>
          <Confirmation />
        </>
      ) : (
        <>
          <Head>
            <title>Sign up</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="robots" content="noindex"></meta>
          </Head>
          <SignUpComponent />
        </>
      )}
    </>
  );
}
