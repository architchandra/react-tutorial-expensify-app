import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, remove, update, onValue, push, onChildChanged } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:  process.env.FIREBASE_DATABASE_URL,
  projectId:  process.env.FIREBASE_PROJECT_ID,
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.FIREBASE_APP_ID,
};
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);



export { auth, googleAuthProvider, database };
