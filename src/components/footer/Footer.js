import './Footer.css';
import { Link } from 'react-router-dom';
import { IoGlobeOutline } from 'react-icons/io5';

export default function Footer({ footerLinks })
{
  return (
    <div className="footer-container">
      <footer className="footer">
        <p className="footer-top">
          Questions? Call
          <Link to="" className="footer-top-link"> 1-844-505-2993</Link>
        </p>
        <ul className="footer-links">
          {
            footerLinks.map((item, index) => 
            {
              return (
                <li className="footer-links-item" key={index}>
                  <Link to={item.link} className="footer-link">{item.text}</Link>
                </li>
              );
            })
          }
        </ul>
        <div className="lang-switcher-container">
          <div className="lang-switcher-select-container">
            <IoGlobeOutline className="lang-switcher-globe-icon" size={20} />
            <select name="lang-switcher" id="lang-switcher-select">
              <option value="english">English</option>
              <option value="spanish">Espanol</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  )
}