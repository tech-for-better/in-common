import SignUpComponent from '../components/Signup/SignUpComponent';
import Confirmation from '../components/Signup/Confirmation';

export default function Signup({ user }) {
  return (
    <>
      {user?.email ? (
        <Confirmation user={user} />
      ) : (
        <SignUpComponent user={user} />
      )}
    </>
  );
}
