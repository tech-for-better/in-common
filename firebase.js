import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMrfgJc74CjiTNRQrEsrvMznNZXvzROug',
  authDomain: 'tfb-in-common.firebaseapp.com',
  projectId: 'tfb-in-common',
  storageBucket: 'tfb-in-common.appspot.com',
  messagingSenderId: '582050428605',
  appId: '1:582050428605:web:c3c29fc9ab7745e5cfe9d4',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
