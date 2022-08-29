import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './hooks/Contexts';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import Browse from './pages/browse/Browse';

export default function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </UserContext.Provider>
    </div >
  );
}
