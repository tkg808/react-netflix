import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './components/Contexts';
import Login from './components/login/Login';

export default function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div >
  );
}
