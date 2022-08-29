import './LoginForm.css';
import { ChangeEvent, FormEvent, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/Contexts';
import { validateEmail, validatePhone, validatePassword } from '../../hooks/useValidation';

interface TextNode
{
  contact: string;
  password: string;
}

export default function LoginForm()
{
  // const { setIsLoggedIn } = useContext(UserContext);
  const [formData, setFormData] = useState<TextNode>(
    {
      contact: "",
      password: "",
    });
  const [validContact, setValidContact] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [activeContactInput, setActiveContactInput] = useState<boolean>(false);
  const [activePasswordInput, setActivePasswordInput] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>)
  {
    setFormData((prevState) =>
    {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event: FormEvent)
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
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>
        Sign In
      </h2>
      <div
        className={`contact-container
          ${((!validContact) && " error")}`}
        onClick={() => setActiveContactInput(true)}>
        <div
          className={`placement-container
            ${(activeContactInput || formData.contact) && " shrink"}`}
        >
          <label htmlFor="login-form-contact-input">
            Email or phone number
          </label>
          <input
            type="text"
            name="contact"
            className={(activeContactInput || formData.contact) && "active"}
            id="login-form-contact-input"
            value={formData.contact}
            onChange={handleChange}
            onBlur={() => setActiveContactInput(false)} />
        </div>
        {!validContact &&
          <p className="input-error-message">
            Please enter a valid email or phone number.
          </p>
        }
      </div>
      <div
        className={`password-container
          ${((!validPassword) && " error")}`}
        onClick={() => setActivePasswordInput(true)}>
        <div
          className={`placement-container
            ${(activePasswordInput || formData.password) && " shrink"}`}>
          <label htmlFor="login-form-password-input">Password</label>
          <input
            type="text"
            name="password"
            className={(activePasswordInput || formData.password) && "active"}
            id="login-form-password-input"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => setActivePasswordInput(false)} />
        </div>
        {!validPassword &&
          <p className="input-error-message">
            Your password must contain between 4 and 60 characters.
          </p>
        }
      </div>
      <button>Sign In</button>
      <div className="bottom-row">
        <div className="checkbox-container">
          <input type="checkbox" id="login-form-remember-me" />
          <label htmlFor="login-form-remember-me">Remember me</label>
        </div>
        <Link to="">Need help?</Link>
      </div>
    </form>
  );
}