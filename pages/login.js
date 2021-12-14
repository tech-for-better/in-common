import Login from '../components/Login/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Signup({ user, approved }) {
  const router = useRouter();

  useEffect(() => {
    if (user && approved) router.push('/dashboard');
    if (user && !approved) router.push('/approval');
  }, [user, approved, router]);

  return <Login user={user} approved={approved} />;
}
