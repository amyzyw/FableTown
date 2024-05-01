import React, { useState } from 'react';
import { signInWithGoogle } from '../utils/firebase';


const LoginForm = () => {
  // Define state variables for form inputs
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { username, password });
    // Add your logic to submit the form data to a backend or perform other actions
  };

  // Handle input changes for name field
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  // Handle input changes for email field
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUserNameChange}
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Log In</button>
      <button onClick={signInWithGoogle}>Google Sign In</button>;
    </form>
  );
};

export default LoginForm;
