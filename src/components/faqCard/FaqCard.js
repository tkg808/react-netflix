import './FaqCard.css';
import { useState } from 'react';
import { questionsData } from './faqCardData';
import EmailForm from '../emailForm/EmailForm';

export default function FaqCard()
{
  const [currItem, setCurrItem] = useState(-1);
  const [faqEmail, setFaqEmail] = useState("");
  const [activeFaqInput, setActiveFaqInput] = useState(false);
  const [validFaqInput, setValidFaqInput] = useState(false);

  return (
    <div className="faq-card">
      <div className="content-container">
        <h1>Frequently Asked Questions</h1>
        <ul>
          {
            questionsData.map((item, index) => 
            {
              return (
                <li
                  key={index}>
                  <button onClick={() => currItem === index ? setCurrItem(-1) : setCurrItem(index)}>
                    {item.question}
                    <svg
                      viewBox="0 0 26 26"
                      className={"question-icon" + (currItem === index ? " open" : " close")}
                      focusable="true">
                      <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
                    </svg>
                  </button>
                  <div className={"answer" + (currItem === index ? " open" : " close")}>
                    <span>
                      {item.answers[0]}
                      {item.answers[1] && <br></br>}
                      {item.answers[1] && <br></br>}
                      {item.answers[1]}
                    </span>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <EmailForm
          nameId="faq-email"
          emailInput={faqEmail}
          setEmailInput={setFaqEmail}
          activeInput={activeFaqInput}
          setActiveInput={setActiveFaqInput}
          validInput={validFaqInput}
          setValidInput={setValidFaqInput} />
      </div>
    </div >
  );
}