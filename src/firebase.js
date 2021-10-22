import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDF5lBe_CsSYehlEizu6bOhpOBk7Jdxcl0',
  authDomain: 'tiktokclone-5c080.firebaseapp.com',
  projectId: 'tiktokclone-5c080',
  storageBucket: 'tiktokclone-5c080.appspot.com',
  messagingSenderId: '20929052753',
  appId: '1:20929052753:web:3b026cd0592ec0059c3870',
  measurementId: 'G-W5M84LQCWP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
