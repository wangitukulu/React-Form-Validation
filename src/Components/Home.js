import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
//An input field and a "Login" button created.
//input field should request the user to enter their name.

const Home = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    {/*Conditional ,Once the user enters their name and clicks the login button, the input field
should be replaced with a <h1> tag saying, "Welcome (user name)," and the
"Login" button text should change to "Logout".
● The user should not be able to log in if the input field is empty.
*/}
    if (username.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <div>
       {/* navigation menu component that appears on every page of your
application.*/}

      
      {/*If log In , the input to be replaced with welcome username*/}
      {loggedIn ? (
        <h1>Welcome {username}!</h1>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/*cClick on button to trigger the function handleLogin */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
