import SignUpComponent from '../components/sign-up/SignUpComponent';
import Confirmation from '../components/sign-up/Confirmation';

import { useState } from 'react';
export default function Signup() {
  const [user, setUser] = useState({});
  return (
    <>
      {/* {<SignUpComponent user={user} setUser={setUser} />} */}
      {user?.email ? (
        <Confirmation />
      ) : (
        <SignUpComponent user={user} setUser={setUser} />
      )}
    </>
  );
}
