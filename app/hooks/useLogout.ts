// useLogout.ts

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/userSlice';

export function useLogout() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    // Clear user data in Redux store
    dispatch(setUser(null));

    // Redirect to the login page
    router.push('/login');
  };

  return logout;
}
