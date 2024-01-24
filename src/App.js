import React from "react";
import Navbar from "./component/Navbar";
import App from './App';
import React, { useState } from 'react';
import SubmissionForm from './SubmissionForm';
import Logout from './logout';





function App() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false to simulate logged out state

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <SubmissionForm />
          <Logout onLogout={handleLogout} />
        </>
      ) : (
        <p>Please log in to use the form.</p>
      )}
    </div>
  );
};

export default App;

