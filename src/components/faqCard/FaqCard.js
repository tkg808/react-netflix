import './FaqCard.css';
import { useState } from 'react';
import { questionsData } from './faqCardData';

export default function FaqCard()
{
  const [currItem, setCurrItem] = useState(-1);

  function handleClick(event, index)
  {
    event.preventDefault();

    if (currItem === index)
    {
      setCurrItem(-1);
    }
    else
    {
      setCurrItem(index);
    }
  }

  return (
    <div className="faq-card-container">
      <div className="faq-card-content">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-card-list">
          {
            questionsData.map((item, index) => 
            {
              return (
                <li
                  className="faq-card-list-item"
                  key={index}>
                  <button className="faq-question" onClick={() => currItem === index ? setCurrItem(-1) : setCurrItem(index)}>
                    {item.question}
                    <svg
                      id="question-icon"
                      viewBox="0 0 26 26"
                      className={"svg-question-icon" + (currItem === index ? " open" : " close")}
                      focusable="true">
                      <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
                    </svg>
                  </button>
                  <div className={"faq-answer" + (currItem === index ? " open" : " close")}>
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
      </div>
    </div >
  );
}