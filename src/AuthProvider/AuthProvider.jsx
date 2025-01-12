import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import usePublicaxios from "../hooks/usePublicaxios";
export const Authcontext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = usePublicaxios()
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
  const googlelogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
  // user login function
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user logout function
  const userLogout = () => {
    setLoading(true)
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
      if (currentuser) {
        const userInfo = {
          email: currentuser?.email
        }
        axiosPublic.post('/jwt',userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
        })
      }
      else{
          localStorage.removeItem('access-token')
      }
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);
  const authData = {
    createUserByemail,
    userLogin,
    userLogout,
    updateUserData,
    googlelogin,
    setUser,
    user,
    loading
  };

  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
