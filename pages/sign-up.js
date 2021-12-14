import SignUpComponent from '../components/Signup/SignUpComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Signup({ user, approved }) {
  const router = useRouter();

  useEffect(() => {
    if (user && !approved) router.push('/approval');
    if (user && approved) router.push('/dashboard');
  }, [user, approved, router]);

  return (
    <>
      <SignUpComponent user={user} />
    </>
  );
}
