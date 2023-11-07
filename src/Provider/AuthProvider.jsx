import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login In user
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // user update profile affer login
  const updateUserProfile = (obj) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, obj)
        .then(() => {
          resolve("Profile updated successfully");
          setLoading(false);
        })
        .catch((error) => {
          reject(error);
          setLoading(false);
        });
    });
  };

  // user updateProfile
  const userUpdateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // using observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      // if user exist then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:5001/api/v1/jwt", loggedUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log("toke issue", res.data);
          });
      } else {
        axios
          .post("http://localhost:5001/api/v1/logout", loggedUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    googleLogin,
    creatUser,
    userUpdateProfile,
    singIn,
    logOut,
    user,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
