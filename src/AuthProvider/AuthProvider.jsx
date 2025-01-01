import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const Authcontext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user creation function
  const createUserByemail = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL
    );
  };
  // user login function
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user logout function
  const userLogout = () => {
    return signOut(auth);
  };
  // update user
  const updateUserData = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  // observer settings
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      // console.log('observer is watching you', currentuser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    createUserByemail,
    userLogin,
    userLogout,
    updateUserData,
    setUser,
    user,
  };

  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
