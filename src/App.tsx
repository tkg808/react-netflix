import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './hooks/Contexts';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';

export default function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div >
  );
}
