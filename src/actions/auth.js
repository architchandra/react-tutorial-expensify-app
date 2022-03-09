import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';



const login = (uid) => ({
  type: 'LOGIN',
  uid,
});
const startLogin = () => {
  return () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
};

const logout = () => ({
  type: 'LOGOUT',
});
const startLogout = () => {
  return () => {
    return signOut(auth);
  };
};



export { login, startLogin, logout, startLogout };
