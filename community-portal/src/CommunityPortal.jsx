import { useState } from 'react'
import { User, MessageSquare, ThumbsUp, ThumbsDown, Plus, Shield, X, LogIn, UserPlus, LogOut, ExternalLink } from 'lucide-react';
import './CommunityPortal.css'

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
                className= "flex items-center py-2 px-2"
                >
                <LogIn className="h-4 w-4"></LogIn>
                 Login</button>

                 <button
                 onClick={() => setshowRegister(true)}
                  className="flex items-center bg-[#F79B72] hover:bg-[#FF9561] text-white font-bold py-2 px-4 rounded"
                  >
                   <UserPlus className="h-4 w-4"></UserPlus>
                   Sign Up
                </button>
          </div>

          </div>
            </div>
          </header>
        
        {showLogin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="relative bg-[#EEEEEE] rounded-lg shadow-sm bg-white-700">
              
              <div className="flex justify-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <button
               onClick={() => setshowLogin(false)}
               type="button"
               >
                <X className="h-5 w-5 text-gray-500"></X>
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
