import Loading from '../components/Loading/Loading';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index({ user, approved }) {
  const router = useRouter();

  useEffect(() => {
    if (user && !approved) router.push('/approval');
    if (!user && !approved) router.push('/login');
    if (user && approved) router.push('/dashboard');
  }, [user, approved, router]);

  return <Loading />;
}
