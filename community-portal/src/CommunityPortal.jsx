import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Lock, User, MessageSquare, ThumbsUp, ThumbsDown, Plus, Shield, X, LogIn, UserPlus, LogOut, ExternalLink } from 'lucide-react';
import './CommunityPortal.css';

function CommunityPortal() {
  const [showLogin,setshowLogin] = useState(false);
  const [showRegister,setshowRegister] = useState(false);
  return(
      <div className="bg-[#DDDDDD] min-h-screen">
          <header className="bg-[#EEEEEE] drop-shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-start justify-between">
             <div className="flex items-center space-x-2">
               <MessageSquare className="h-8 w-8 text-[#F79B72]" />
               <h1 className="text-xl font-bold text-gray-900">Community Portal</h1>
            </div>
            <div className="flex items-center space-x-2">
             <div className="flex space-x-2">
               <button
                onClick={() => setshowLogin(true)}
                className= "flex items-center py-2 px-2 gap-1"
                >
                <LogIn className="h-4 w-4"></LogIn>
                 Login</button>

                 <button
                 onClick={() => setshowRegister(true)}
                  className="flex gap-1 items-center bg-[#F79B72] hover:bg-[#FF9561] text-white font-bold py-2 px-4 rounded"
                  >
                   <UserPlus className="h-4 w-4"></UserPlus>
                   Sign Up
                </button>
          </div>

          </div>
            </div>
          </header>

        {
          showRegister && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#EEEEEE] rounded-lg max-w-md w-full p-6">
              
              <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Register</h2>
              <button
               onClick={() => setshowRegister(false)}
               type="button"
               >
                <X className="h-5 w-5 text-gray-500"></X>
              </button>
              </div>
            <div className="space-y-4">
              <div>
                <label
                 className="block flex text-sm"
                 >

                  Username</label>
              </div>
              <div>
                <input
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
                 placeholder='Enter Username'
                 ></input>
              </div>

              <div>
                <label
                 className="block flex text-sm "
                 >
                  Password</label>
              </div>

              <div>
                    <input
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
                 placeholder='Enter Password'
                 ></input>
              </div>

              <div>
                <label
                 className="block flex text-sm"
                 >
                  Confirm Password</label>
              </div>

              <div>
                    <input
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
                 placeholder='Confirm Password'
                 ></input>
            </div>

            </div>

            
            <div className="flex item-center justify-start space-x-2 mt-4">

            <button
                  className="flex-1 bg-[#2A4759] text-white py-2 px-4 rounded"
                  >
                    Register
                </button>

            <button
                  onClick = { () => setshowRegister(false)}
                  className="flex-1 items-center bg-[#F79B72] text-white py-2 px-4 rounded"
                  >
                    Cancel
                </button>
            </div>
            </div>
          </div>
          )
        }
        
        {showLogin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#EEEEEE] rounded-lg max-w-md w-full p-6">
              
              <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <button
               onClick={() => setshowLogin(false)}
               type="button"
               >
                <X className="h-5 w-5 text-gray-500"></X>
              </button>
              </div>
            <div className="space-y-4">
              <div>
                <label
                 className="block flex text-sm"
                 >

                  Username</label>
              </div>
              <div>
                <input
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
                 placeholder='Enter Username'
                 ></input>
              </div>

              <div>
                <label
                 className="block flex text-sm"
                 >
                  Password</label>
              </div>

              <div>
                    <input
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
                 placeholder='Enter Username'
                 ></input>
              </div>
            </div>
            <div className="flex item-center justify-start space-x-2 mt-4">

            <button
                  className="flex-1 bg-[#2A4759] text-white py-2 px-4 rounded"
                  >
                    Login
                </button>

            <button
                  className="flex flex-1 items-center gap-2 bg-[#F79B72] text-white py-2 px-4 rounded"
                  >
                    <FaGoogle className="w-4 h-4"></FaGoogle>
                    Login with Google
                </button>
            </div>
            </div>
          </div>

        )

        }
      </div>
  )
  
}

export default CommunityPortal
