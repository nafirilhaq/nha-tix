import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDU5qTjliVBxE0n1NGakZJsDNY90NAIxJE',
  authDomain: 'nhatix-ad727.firebaseapp.com',
  projectId: 'nhatix-ad727',
  storageBucket: 'nhatix-ad727.appspot.com',
  messagingSenderId: '934076437115',
  appId: '1:934076437115:web:bc520c9a6f7f1d909748de',
};

initializeApp(firebaseConfig);

export const fireAuth = getAuth();
