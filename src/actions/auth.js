import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';



const startLogin = () => {
  return () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
};



export { startLogin };
