import { signInWithGoogle, auth } from '../utils/firebase';
import { useAuth } from "../auth/AuthUserProvider";
import { useNavigate } from "react-router-dom"; 



const LoginForm = () => {

const { user } = useAuth(); 
const navigate = useNavigate();

const handleLogOut = () => {
  auth.signOut() // Call Firebase's signOut method to log out the user
    .then(() => {
      console.log("User logged out successfully");
      navigate("/");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};

const handleLoginRedirect = () => {
    navigate("/");

};


  return (

    <div>
    {user ? (
      <div id='center-container'>
        <h1>BYE～ 🧚‍♀️</h1>
        <button onClick={handleLogOut} className='login-button'>Log Out</button>

        <p> ⚔️ Embark on epic quests and adventures that will test your leadership skills and strategic prowess. </p>
      <p> 📜 Explore vast lands teeming with mythical creatures, ancient ruins, and hidden treasures waiting to be uncovered. </p>
      <p> 🗺️ Gather a diverse array of heroes, each with their own unique abilities, and lead them to glory in thrilling battles against formidable foes. </p>
      <p> 🪸 Whether you seek fame, fortune, or the thrill of conquest, FableTown offers an immersive gaming experience like no other.
      Join us and write your own legendary tale today!</p>
        </div>
    ) : (
      <div id='center-container'>
      <h1>Your Journey Start Here!</h1>

      <button onClick={() => {
            signInWithGoogle();
            handleLoginRedirect(); // Call handleLoginRedirect after signing in
          }} className='login-button'>Log In</button>
        
      <p> ⚔️ Embark on epic quests and adventures that will test your leadership skills and strategic prowess. </p>
      <p> 📜 Explore vast lands teeming with mythical creatures, ancient ruins, and hidden treasures waiting to be uncovered. </p>
      <p> 🗺️ Gather a diverse array of heroes, each with their own unique abilities, and lead them to glory in thrilling battles against formidable foes. </p>
      <p> 🪸 Whether you seek fame, fortune, or the thrill of conquest, FableTown offers an immersive gaming experience like no other.
      Join us and write your own legendary tale today!</p>
      </div>
    )}
    </div>
  );
};

export default LoginForm;
