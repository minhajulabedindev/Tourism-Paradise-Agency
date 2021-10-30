import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { initializeFireBaseAuthentiction } from "../Firebase/Firebase.init";

initializeFireBaseAuthentiction();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const auth = getAuth();

  //----------sign in with google---------------------
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };

  //----------sign out with google---------------------

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  //-------------------- useEffect part -------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    isLoading,
    user,
    setUser,
    logOut,
    signWithGoogle,
    setLoading,
  };
};

export default UseFirebase;
