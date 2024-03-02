import React, { useState, useEffect } from 'react';
import StartPage from './StartPage';
import InfoPage from './InfoPage';
import GamePage from './GamePage';
import '../src/index.css'; // Import CSS for styling
import LoginPage from './LoginPage';
import Background from './images/bg.png';

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const handleLogin = (username) => {
    localStorage.setItem('username', username);
    setUsername(username);
    window.location.href = '/start';
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    window.location.href = '/';
  };

  useEffect(() => {
    if (username === null && window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, [username]);

  const renderPage = () => {
    switch (window.location.pathname) {
      case '/':
        return <LoginPage onLogin={handleLogin} />;
      case '/start':
        return <StartPage username={username} onLogout={handleLogout} />;
      case '/info':
        return <InfoPage username={username} onLogout={handleLogout} />;
      case '/game':
        return <GamePage username={username} onLogout={handleLogout} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
  
      renderPage()
    
    )
};

export default App;