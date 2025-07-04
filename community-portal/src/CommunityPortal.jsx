import { useState, useEffect } from 'react';
import { Feather, User, MessageSquare, ThumbsUp, ThumbsDown, X, LogIn, UserPlus, LogOut, ExternalLink } from 'lucide-react';
import './CommunityPortal.css';
import LoginForm from './loginForm';
import RegisterForm from './RegisterForm'


function CommunityPortal() {
  const[user,setUser] = useState(null);
  const [showLogin,setshowLogin] = useState(false);
  const [showRegister,setshowRegister] = useState(false);
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState({ title: '', content: '', link: '' });
  const [showNewPost, setShowNewPost] = useState(false);


  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "Welcome to our Community Portal!",
        content: "This is the first post in our new community. Feel free to share your thoughts and engage with others!",
        link: "",
        author: "admin",
        votes: 5,
        userVote: null,
        timestamp: Date.now() - 3600000
      },
      {
        id: 2,
        title: "Check out this amazing React tutorial",
        content: "Found this great resource for learning React. Perfect for beginners!",
        link: "https://react.dev",
        author: "developer123",
        votes: 12,
        userVote: null,
        timestamp: Date.now() - 7200000
      },
      {
        id: 3,
        title: "What's your favorite programming language?",
        content: "I'm curious to hear what languages everyone enjoys working with and why!",
        link: "",
        author: "coder_enthusiast",
        votes: 8,
        userVote: null,
        timestamp: Date.now() - 10800000
      }
    ];
    setPosts(samplePosts);
  }, []);


  const createPost = (e) => {
    e.preventDefault();
    if(!user || !info.title)
      return;

    const post = {
      id: Date.now(),
      title: info.title,
      content: info.content,
      link: info.link,
      author: info.username,
      votes:0,
      userVote: null,
      timestamp: Date.now()
    }

    setPosts(prev => [post, ...prev]);
    setInfo({ title: '', content: '', link: '' });
    setShowNewPost(false);
  }

  const handleVotes = (postId, voteType) => {
    if(!user)
      return;

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        let newVotes = post.votes;
        let newUserVote = voteType;

        if (post.userVote === voteType) {
          newUserVote = null;
          newVotes += voteType === 'up' ? -1 : 1;
        } else if (post.userVote) {
          newVotes += voteType === 'up' ? 2 : -2;
        } else {
          newVotes += voteType === 'up' ? 1 : -1;
        }

        return { ...post, votes: newVotes, userVote: newUserVote };
      }
      return post;
    }));

  }

  const sortedPosts = [...posts].sort((a, b) => b.votes - a.votes);

  const formatTimeAgo = (timestamp) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

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
                    onClick={() => setShowNewPost(true)}
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
           {showNewPost && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-[#EEEEEE] rounded-lg max-w-md w-full p-6">
                 <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Create New Post</h2>
                   <button
                    onClick={() => setShowNewPost(false)}
                    type="button"
                    className="cursor-pointer"
                   >
                      <X className="h-5 w-5 text-gray-500" />
                  </button>
                 </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={info.title}
                  onChange={(e) => setInfo(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none mb-4"
                  placeholder="Please enter your title."
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                 value={info.content}
                 onChange={(e) => setInfo(prev => ({ ...prev, content: e.target.value }))}
                 rows={4}
                 className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none mb-4"
                 placeholder="Share your thoughts..."
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">Link (optional)</label>
                <input
                  type="url"
                  value={info.link}
                  onChange={(e) => setInfo(prev => ({ ...prev, link: e.target.value }))}
                  className="w-full border-2 border-gray-400 px-3 py-2 rounded-md focus:border-blue-500 focus:outline-none mb-4"
                  placeholder="https://example.com"
                />

                <div className="flex items-center justify-start space-x-2 mt-4">
                  <button
                  onClick={createPost}
                  className="flex-1 bg-[#2A4759] text-white py-2 px-4 rounded cursor-pointer"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setShowNewPost(false)}
                    className="flex-1 bg-[#F79B72] text-white py-2 px-4 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
               </div>
              </div>
            </div>
            )}
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
        {sortedPosts.map(post => (
        <div key={post.id} className="flex drop-shadow-sm rounded-md bg-[#EEEEEE] mt-3 max-w-4xl mx-auto px-4 py-6 space-x-4">
          <div className = "flex items-start space-x-3">
          <div className="flex flex-col items-center space-y-0.5">
            <button
              onClick={() => handleVotes(post.id, 'up')}
              className={`p-1 rounded ${
                post.userVote === 'up'
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-gray-400 hover:text-orange-500 hover:bg-gray-50'
              } ${!user ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!user}
            >
              <ThumbsUp className="h-4 w-4"></ThumbsUp>
            </button>
            <span>
              {post.votes}
            </span>
            <button
            onClick={() => handleVotes(post.id, 'down')}
            className={`p-1 rounded ${
              post.userVote === 'down'
                ? 'text-red-500 bg-red-50'
                : 'text-gray-400 hover:text-orange-500 hover:bg-gray-50'
            } ${!user ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!user}
              >
              <ThumbsDown className="h-4 w-4"></ThumbsDown>
            </button>
           
          </div>
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className = "text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
            {post.content && (
              <p className="text-gray-800 mb-2">{post.content}</p>
              )}
              {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-500 hover:text-blue-600 mb-3"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">{post.link}</span>
                </a>

            )}
           <div className="flex items-center justify-between text-sm text-gray-500">
                <span>by {post.author} • {formatTimeAgo(post.timestamp)}</span>
            </div>

          </div>
         
        </div>
         ))}
      </div>
  )
  
}

export default CommunityPortal
