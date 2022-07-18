import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './components/Contexts';
import Login from './components/login/Login';
import LoginForm from './components/loginForm/LoginForm';

export default function App()
{
  const [username, setUsername] = useState(null);
  const [isPassword, setIsPassword] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ username, setUsername }}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/form" element={<LoginForm />} /> */}
        </Routes>
      </UserContext.Provider>
    </div >
  );
}
