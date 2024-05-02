import { signInWithGoogle, auth } from '../utils/firebase';
import { useAuth } from "../auth/AuthUserProvider";
import { useNavigate } from "react-router-dom"; 



const LoginForm = () => {
//   // Define state variables for form inputs
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   // Handle form submission
//   const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('Submitted:', { username, password });
//     // Add your logic to submit the form data to a backend or perform other actions
//   };

//   // Handle input changes for name field
//   const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserName(event.target.value);
//   };

//   // Handle input changes for email field
//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

const { user } = useAuth(); 
const navigate = useNavigate();

const handleLogOut = () => {
  auth.signOut() // Call Firebase's signOut method to log out the user
    .then(() => {
      console.log("User logged out successfully");
      navigate("/");
      // You might also want to redirect the user or perform additional actions after logout
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};

const handleLoginRedirect = () => {
    navigate("/");

};


  return (

    
    //   <div>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={handleUserNameChange}
    //       placeholder="Enter your username"
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="text"
    //       id="password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       placeholder="Enter your password"
    //       required
    //     />
    //   </div>
    //   <button type="submit">Log In</button>
    <div>
    {user ? (
      <div id='center-container'>
        <h1>BYE! 🧚‍♀️</h1>
        <button onClick={handleLogOut} className='login-button'>Log Out</button>
        </div>
    ) : (
      <div id='center-container'>
      <h1>Your Journey Start Here! 🪸</h1>
      <button onClick={() => {
            signInWithGoogle();
            handleLoginRedirect(); // Call handleLoginRedirect after signing in
          }} className='login-button'>Log In</button>
      </div>
    )}
    </div>
  );
};

export default LoginForm;
