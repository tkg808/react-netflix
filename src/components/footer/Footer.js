import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({ footerLinks })
{
  return (
    <footer className="footer">
      <p>
        Questions? Call <Link to="" className="contact-number">1-844-505-2993</Link>
      </p>
      <ul className="links-list">
        {
          footerLinks.map((item, index) => 
          {
            return (
              <li className="links-item" key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            );
          })
        }
      </ul>
      <div className="lang-container">
        <div className="lang-switcher-container">
          <label htmlFor="lang-switcher-footer-select">
            <span>Select Language</span>
          </label>
          <div className="select-container">
            <select name="lang-switcher-select" id="lang-switcher-footer-select">
              <option value="english">English</option>
              <option value="spanish">Espanol</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}