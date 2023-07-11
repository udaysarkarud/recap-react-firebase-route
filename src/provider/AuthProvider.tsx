import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { IChildren } from "../types";
import app from "../firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const auth = getAuth(app);
  const googleBtnProvider = new GoogleAuthProvider();

  const handleGoogleBtn = () => {
    return signInWithPopup(auth, googleBtnProvider);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const totalContext = {
    cart,
    setCart,
    handleGoogleBtn,
    user,
    handleSignOut,
    setUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={totalContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
