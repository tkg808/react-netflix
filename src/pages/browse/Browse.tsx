import './Browse.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilesGate from '../../components/profilesGate/ProfilesGate';
import { LogoIcon } from '../../res/LogoIcon';
import { SearchIcon } from '../../res/SearchIcon';
import { BellIcon } from '../../res/BellIcon';
import { tabsDataList } from '../../res/tabsDataList';

interface Profile
{
  name: string;
  avatar: string;
  pin: number | null;
}

export default function Browse()
{
  const [currProfile, setCurrProfile] = useState<Profile | null>(null);

  return (
    <div className="browse-page">
      <div className="pinned-header-container">
        <header>
          <Link to="" className="logo-link">
            <LogoIcon />
          </Link>
          <ul className="primary-nav">
            <li className="nav-menu"></li>
            {
              currProfile && tabsDataList.map((item, index) =>
              {
                return (
                  <li key={index} className="nav-tab">
                    <Link to={item.linkPath} tabIndex={index}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
          {
            currProfile && <div className="secondary-nav">
              <div className="nav-element">
                <div className="search-box">
                  <button className="search-tab">
                    <SearchIcon />
                  </button>
                </div>
              </div>
              <div className="nav-element">
                <span className="notifications">
                  <button className="notifications-menu">
                    <BellIcon />
                    <span className="notification-pill">5</span>
                  </button>
                </span>
              </div>
              <div className="nav-element">
                <div className="account-menu-item">
                  <div className="account-dropdown-button">
                    <Link to="">
                      <span className="profile-link">
                        <img src={"" + (currProfile && currProfile.avatar)} />
                      </span>
                    </Link>
                    <span className="caret" />
                  </div>
                </div>
              </div>
            </div>
          }
        </header>
      </div>
      {!currProfile && <ProfilesGate setCurrProfile={setCurrProfile} />}
    </div >
  );
}