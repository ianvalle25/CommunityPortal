import { confirmPasswordReset, createUserWithEmailAndPassword } from 'firebase/auth';
import { X, Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { auth } from "./firebase";

function RegisterForm({show, onClose, newUser}){
    if (!show) return null;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matchingPassword, setmatchingPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();

        //checks if the user's passwords are matching
        if( password !== matchingPassword)
        {
            alert("Passwords do not match.")
            return;
        }
        

        try {
          //sends info to the firebase
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          
          //if user created a new account the close modal
          if(user)
          {
            newUser(user);
            onClose();
          }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered. Try logging in.");
              } else {
                console.error(error.message);
              }
        }
      };

    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-[#EEEEEE] rounded-lg max-w-md w-full p-6">
          
          <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Register</h2>
          <button
           onClick={onClose}
           type="button"
           className="cursor-pointer"
           >
            <X className="h-5 w-5 text-gray-500"></X>
          </button>
          </div>

        <div className="space-y-4">
          <div>
            <label
             className="block flex text-sm gap-2 "
             >
              <Mail className="h-4 w-4"></Mail>
              Email
              </label>
          </div>
          <div>
            <input
            type="email"
             className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
             placeholder='Enter Email'
             value = {email}
             onChange={(e) => setEmail(e.target.value)}
             ></input>
          </div>

          <div>
            <label
             className="block flex text-sm gap-2"
             >
              <Lock className="h-4 w-4"></Lock>
              Password</label>
          </div>

          <div>
            <input
            type="password"
             className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
             placeholder="Enter Password"
             onChange={(e) => setPassword(e.target.value)}
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
             type="password"
             className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none"
             placeholder='Confirm Password'
             value={matchingPassword}
             onChange={(e) => setmatchingPassword(e.target.value)}
             ></input>
        </div>

        </div>

        <form onSubmit={handleRegister}>
        <div className="flex item-center justify-start space-x-2 mt-4">
        
        <button
            disabled ={!email || !password || !matchingPassword}
            className="flex-1 bg-[#2A4759] text-white py-2 px-4 rounded cursor-pointer"
            >
                Register
            </button>
        <button
              onClick = {onClose}
              className="flex-1 cursor-pointer items-center bg-[#F79B72] text-white py-2 px-4 rounded"
              >
                Cancel
            </button>
            
        </div>
        </form>
        </div>
        
      </div>
      
      )
}
export default RegisterForm