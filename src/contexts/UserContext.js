import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init'

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const googleSinIn = () => signInWithPopup(auth, googleProvider);

    const logOut = () => signOut(auth);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signIn, logOut, googleSinIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;