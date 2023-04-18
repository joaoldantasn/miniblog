import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-YjYEU8jRylYS5IIsX5298WqvvMoTq7k',
  authDomain: 'miniblog-9c7ae.firebaseapp.com',
  projectId: 'miniblog-9c7ae',
  storageBucket: 'miniblog-9c7ae.appspot.com',
  messagingSenderId: '775854497129',
  appId: '1:775854497129:web:47805ee0ded67d4569f1f8',
  measurementId: 'G-DTDJZV511Q',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
