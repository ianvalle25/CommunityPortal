
import { FaGoogle } from "react-icons/fa";
import { Mail, Lock, X } from "lucide-react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase"
import React, {useState} from "react"

function LoginForm({ show, onClose, newUser }) {
  if (!show) return null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submit log in info
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      //sets the email and password into firebase
        await signInWithEmailAndPassword(auth,email,password);
        const user = auth.currentUser;
        //checks if user inputted right info
        if(!user)
            alert("Wrong Combination");
        else
        {
          //if the user is logged in send it then close modal
            newUser(user);
            onClose();
        }
    } catch  (error){
        console.log(error.message);
    }
  }

  //log in with google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      newUser(user);
      onClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#EEEEEE] rounded-lg max-w-md w-full p-6">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Login</h2>
          <button
            onClick={onClose}
            type="button"
            className="cursor-pointer"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block flex text-sm gap-2 h-6">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
              placeholder="Enter Email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>

          <div>
            <label className="block flex text-sm gap-2 h-6">
              <Lock className="h-4 w-4" />
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start space-x-2 mt-4">
          <button className="flex-1 bg-[#2A4759] text-white py-2 px-4 rounded cursor-pointer">
            Login
          </button>

          <button 
          type="button"
          onClick={handleGoogleSignIn}
          className="flex cursor-pointer flex-1 items-center gap-2 bg-[#F79B72] text-white py-2 px-4 rounded">
            <FaGoogle className="w-4 h-4" />
            Login with Google
          </button>
        
        </div>
        </form>
      </div>
     
    </div>
  );
}

export default LoginForm;
