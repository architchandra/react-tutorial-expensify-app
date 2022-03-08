import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';



const startLogin = () => {
  return () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
};

const startLogout = () => {
  return () => {
    return signOut(auth);
  };
};



export { startLogin, startLogout };
