import './LoginForm.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/Contexts';
import { validateEmail, validatePhone, validatePassword } from '../../hooks/useValidation';

export default function LoginForm({ })
{
  const { setIsLoggedIn } = useContext(UserContext);
  const [formData, setFormData] = useState(
    {
      contact: "",
      password: "",
    })
  const [validContact, setValidContact] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [activeContactInput, setActiveContactInput] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);

  function handleChange(event)
  {
    setFormData((prevState) =>
    {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event)
  {
    event.preventDefault();

    if (validContact && validPassword)
    {
      // setIsLoggedIn(true);
      console.log("User is logged in!");
    }
    else
    {
      console.log("Please enter valid login info", formData);
    }
  }

  useEffect(() =>
  {
    validateEmail(formData.contact) || validatePhone(formData.contact) ?
      setValidContact(true) :
      setValidContact(false);

    validatePassword(formData.password) ?
      setValidPassword(true) :
      setValidPassword(false);
  }, [formData]);

  return (
    <div className="login-form-container">
      <form className="login-form-main" onSubmit={handleSubmit}>
        <h2 className="login-form-title">
          Sign In
        </h2>
        <div
          className={`login-form-user-contact-container
          ${((!validContact) && " error")}`}
          onClick={() => setActiveContactInput(true)}>
          <div
            className={`login-form-user-contact-placement-container
            ${(activeContactInput || formData.contact) && " shrink"}`}
          >
            <label htmlFor="login-form-user-contact-input">
              Email or phone number
            </label>
            <input
              type="text"
              name="contact"
              className={(activeContactInput || formData.contact) && "active"}
              id="login-form-user-contact-input"
              value={formData.contact}
              onChange={handleChange}
              onBlur={() => setActiveContactInput(false)} />
          </div>
          {!validContact &&
            <p className="login-form-user-contact-error-message">
              Please enter a valid email or phone number.
            </p>
          }
        </div>
        <div
          className={`login-form-user-password-container
          ${((!validPassword) && " error")}`}
          onClick={() => setActivePasswordInput(true)}>
          <div
            className={`login-form-user-password-placement-container
            ${(activePasswordInput || formData.password) && " shrink"}`}>
            <label htmlFor="login-form-user-password-input">Password</label>
            <input
              type="text"
              name="password"
              className={(activePasswordInput || formData.password) && "active"}
              id="login-form-user-password-input"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => setActivePasswordInput(false)} />
          </div>
          {!validPassword &&
            <p className="login-form-user-password-error-message">
              Your password must contain between 4 and 60 characters.
            </p>
          }
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