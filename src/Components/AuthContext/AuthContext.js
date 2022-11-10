import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthenticationContext = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // login user 
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    // signup user
    const signUpUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // updateUserProfile
    const updateUserProfile =(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }
    // user log out 
    const logOut = () =>{
            localStorage.removeItem('token')
            signOut(auth)
            .then(res=>toast.success('Log Out Successfully'))
            .catch(err=>toast.err(err.message))

    }
    // google signIn
    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider);
    }

    // get signIn user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        });
        return ()=> {
            unsubscribe();
        }
    },[])



    const authenticationMethod = {
        signUpUser,
        loginUser,
        updateUserProfile,
        user,
        loading,
        logOut,
        googleSignIn
    } 
    return (
       <AuthenticationContext.Provider value={authenticationMethod}>
        {children}
       </AuthenticationContext.Provider>
    );
};

export default AuthContext;