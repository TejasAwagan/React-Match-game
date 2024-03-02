import React, { useState, useEffect } from 'react';
import StartPage from './StartPage';
import InfoPage from './InfoPage';
import GamePage from './GamePage';
import '../src/index.css'; 
import LoginPage from './LoginPage';
// import Background from './images/bg.png';

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [currentPage, setCurrentPage] = useState('/')
  const handleLogin = (username) => {
    localStorage.setItem('username', username);
    setUsername(username);
    setCurrentPage('/start');
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    setCurrentPage('/');
  };

  useEffect(() => {
    if (username === null && currentPage !== '/') {
      setCurrentPage('/');
    }else{}
  }, [username]);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <LoginPage onLogin={handleLogin} />;
      case '/start':
        return <StartPage username={username} onLogout={handleLogout} setCurrentPage={setCurrentPage}/>;
      case '/info':
        return <InfoPage username={username} onLogout={handleLogout} setCurrentPage={setCurrentPage}/>;
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