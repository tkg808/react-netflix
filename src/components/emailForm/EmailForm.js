import './EmailForm.css';
import { useEffect } from 'react';
import { validateEmail } from '../../hooks/useValidation';

export default function EmailForm({ emailInput, setEmailInput, activeInput, setActiveInput, validInput, setValidInput })
{
  useEffect(() =>
  {
    validateEmail(emailInput) ? setValidInput(true) : setValidInput(false);
  }, [emailInput]);

  return (
    <form className="email-form-container">
      <h3 className="email-form-title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="email-form-row-container">
        <div
          className={`email-form-input-container
                  ${((!validInput) && " error")}`}
          onClick={() => setActiveInput(true)}>
          <div
            className={`email-form-input-placement-container
                    ${(activeInput || emailInput) && " shrink"}`}
          >
            <label htmlFor="email-form-input">
              Email address
            </label>
            <input
              type="text"
              name="email"
              className={(activeInput || emailInput) && "active"}
              id="email-form-input"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onBlur={() => setActiveInput(false)} />
          </div>
          {!validInput &&
            <p className="email-form-input-error-message">
              Please enter a valid email or phone number.
            </p>
          }
        </div>
        <button className="email-form-button">
          <span>Get Started</span>
        </button>
      </div>
    </form>
  );
}