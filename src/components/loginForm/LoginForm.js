import './LoginForm.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Contexts';

export default function LoginForm()
{
  const [formData, setFormData] = useState(
    {
      username: null,
      password: null,
    })

  const { username, setUsername, setIsPassword } = useContext(UserContext);

  function handleChange(event)
  {
    setFormData((prevState) =>
    {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="login-form-container">
      <form className="login-form-main" onSubmit={() => null}>
        <h2 className="login-form-title">
          Sign In
        </h2>
        <div className="user-info-container">
          <label htmlFor="login-form-user-info">Email or phone number</label>
          <input
            type="text"
            id="login-form-user-info"
            value={formData.username}
            onChange={handleChange} />
        </div>
        <div className="user-password-container">
          <label htmlFor="login-form-user-password">Password</label>
          <input
            type="text"
            id="login-form-user-password"
            value={formData.password}
            onChange={handleChange} />
        </div>
        <button className="login-form-submit-button">Sign In</button>
        <div className="login-form-main-bottom-row">
          <div className="login-form-checkbox-container">
            <input type="checkbox" id="login-user-remember" />
            <label htmlFor="login-user-remember">Remember me</label>
          </div>
          <Link to="" className="login-form-help-link">Need help?</Link>
        </div>
      </form>
      <div className="login-form-other">
        Other
      </div>
    </div>
  );
}