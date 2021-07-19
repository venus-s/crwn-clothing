import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDRRIA644bf5v-qrQhX25h9NPkJTiwHB7Y',
  authDomain: 'crwn-db-8843b.firebaseapp.com',
  projectId: 'crwn-db-8843b',
  storageBucket: 'crwn-db-8843b.appspot.com',
  messagingSenderId: '422025281925',
  appId: '1:422025281925:web:a2b4c16a2f043f2a2f84ec',
  measurementId: 'G-M18LF1XYPN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
