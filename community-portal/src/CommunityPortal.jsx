import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Feather, User, MessageSquare, ThumbsUp, ThumbsDown, Plus, Shield, X, LogIn, UserPlus, LogOut, ExternalLink } from 'lucide-react';
import './CommunityPortal.css';
import LoginForm from './loginForm';
import RegisterForm from './RegisterForm'


function CommunityPortal() {
  const[user,setUser] = useState(null);
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

             <div className="flex space-x-2">
              { user ? (
                   <>
                   <User className="mt-2 mx-4 h-6 w-6"></User>
                   <button
                    className="flex items-center gap-1 bg-[#2A4759] hover:bg-[#213848] text-white px-4 py-2 rounded cursor-pointer"
                   >
                    <Feather className="h-4 w-4"></Feather>
                    New Post
                   </button>
                   <button
                     onClick={() => {
                       setUser(null);
                     }}
                     className="flex items-center gap-1 bg-[#F79B72] hover:bg-[#FF9561] text-white px-4 py-2 rounded cursor-pointer"
                   >
                     <LogOut className="h-4 w-4" />
                     Logout
                   </button>

                 </>

              ) : (
                <>
                <button
                onClick={() => setshowLogin(true)}
                className= "flex items-center py-2 px-2 gap-1 cursor-pointer"
                >
                <LogIn className="h-4 w-4"></LogIn>
                 Login</button>

                 <button
                 onClick={() => setshowRegister(true)}
                  className="flex cursor-pointer gap-1 items-center bg-[#F79B72] hover:bg-[#FF9561] text-white font-bold py-2 px-4 rounded"
                  >
                   <UserPlus className="h-4 w-4"></UserPlus>
                   Register
                </button>
                </>
              )}
             </div>
            </div>
          </header>

        {showRegister && (
            <RegisterForm show={showRegister} 
            onClose={() => setshowRegister(false)}
            newUser={(user) => setUser(user) }
             />
          )
        }
        
        {showLogin && (
          <LoginForm show={showLogin}
           onClose={() => setshowLogin(false)}
           newUser={(user) => setUser(user) }
          />

        )

        }
      </div>
  )
  
}

export default CommunityPortal
