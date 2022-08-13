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
        <div className="login-form-user-contact-input-container">
          <input
            type="text"
            id="login-form-user-contact-input"
            value={formData.username}
            onChange={handleChange} />
          <label htmlFor="login-form-user-contact-input">Email or phone number</label>
        </div>
        <div className="login-form-user-password-input-container">
          <input
            type="text"
            id="login-form-user-password-input"
            value={formData.password}
            onChange={handleChange} />
          <label htmlFor="login-form-user-password-input">Password</label>
        </div>
        <button className="login-form-submit-button">Sign In</button>
        <div className="login-form-main-bottom-row">
          <div className="login-form-checkbox-container">
            <input type="checkbox" id="login-form-user-remember" />
            <label htmlFor="login-form-user-remember">Remember me</label>
          </div>
          <Link to="" className="login-form-help-link">Need help?</Link>
        </div>
      </form>
      <div className="login-form-other">
        <div className="login-form-signup-container">
          New to Netflix? <Link to="" className="login-form-signup-link">Sign up now.</Link>
        </div>
        <div className="login-form-recaptcha-container">
          <p className="login-form-recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <Link to="" className="login-form-recaptcha-terms-of-use-link"> Learn more.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}