import SignUpComponent from '../components/Signup/SignUpComponent';
import Confirmation from '../components/Signup/Confirmation';
import Head from 'next/head';

export default function Signup({ user }) {
  return (
    <>
      {user?.email ? (
        <Confirmation user={user} />
      ) : (
        <>
          <Head>
            <title>Sign up</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <SignUpComponent user={user} />
        </>
      )}
    </>
  );
}
