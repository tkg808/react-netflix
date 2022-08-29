import './EmailForm.css';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { validateEmail } from '../../hooks/useValidation';

interface Props
{
  nameId: string;
  emailInput: string;
  setEmailInput: Dispatch<SetStateAction<string>>;
  activeInput: boolean;
  setActiveInput: Dispatch<SetStateAction<boolean>>;
  validInput: boolean;
  setValidInput: Dispatch<SetStateAction<boolean>>;
}

export default function EmailForm(
  {
    nameId,
    emailInput,
    setEmailInput,
    activeInput,
    setActiveInput,
    validInput,
    setValidInput
  }: Props)
{
  useEffect(() =>
  {
    validateEmail(emailInput) ? setValidInput(true) : setValidInput(false);
  }, [emailInput]);

  return (
    <div className="email-form-container">
      <h3 className="title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className="email-form">
        <div
          className={`input-container
                  ${((!validInput) && " error")}`}
          onClick={() => setActiveInput(true)}>
          <div
            className={`placement-container
                    ${(activeInput || emailInput) && " shrink"}`}
          >
            <label htmlFor={nameId}>
              Email address
            </label>
            <input
              type="text"
              name="email"
              className={(activeInput || emailInput) && "active"}
              id={nameId}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onBlur={() => setActiveInput(false)} />
          </div>
          {
            !validInput &&
            <p className="error-text">
              Please enter a valid email or phone number.
            </p>
          }
        </div>
        <button>
          <span>Get Started</span>
        </button>
      </form >
    </div>
  );
}