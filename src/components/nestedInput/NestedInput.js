import './NestedInput.css';
import { useState } from 'react';

export default function NestedInput({ inputLabel, inputName, inputState, setInputState, validInput, errorMessage })
{
  const [activeInput, setActiveInput] = useState(false);

  return (
    <div
      className={`nested-input-container
          ${((!validInput) && " error")}`}
      onClick={() => setActiveInput(true)}>
      <div
        className={`nested-input-placement-container
            ${(activeInput || inputState) && " shrink"}`}
      >
        <label htmlFor={`nested-input-${inputName}-input`}>
          {inputLabel}
        </label>
        <input
          type="text"
          name={inputName}
          className={(activeInput || inputState) && "active"}
          id={`nested-input-${inputName}-input`}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          onBlur={() => setActiveInput(false)} />
      </div>
      {!validInput &&
        <p className="nested-input-error-message">
          {errorMessage}
        </p>
      }
    </div>
  )
}