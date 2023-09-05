import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from "../firebase"
import { useNavigate } from 'react-router-dom';




function OAuth() {
  const navigate = useNavigate();


  async function onGoogleClick(){
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
       
        //check for the user

        const docRef = doc(db, "users", user.uid);

        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()){
          await setDoc(docRef, {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp()
          });
        }

        navigate("/");
 
      } catch (error) {
        toast.error("Couldn't authorize with Google")
      }
  }

  return (
    //agr type submit hogi to is buttin k click pe signup khali page wla error toast bn jy ga qk submit type hmry form k andr hy to is lia hm iski type button krden ge
    <button
    onClick={onGoogleClick}
    type="button"
    className="w-full px-7 py-3 bg-red-600 text-white text-l uppercase font-medium rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800 flex items-center justify-center"
  >
    <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
    Continue with google
  </button>
  
  )
}

export default OAuth
