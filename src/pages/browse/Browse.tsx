import './Browse.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilesGate from '../../components/profilesGate/ProfilesGate';
import { LogoIcon } from '../../res/LogoIcon';
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
          <nav className="tabbed-nav">
            <ul className="tabs-list">
              {
                tabsDataList.map((item, index) =>
                {
                  return (
                    <li key={index}>
                      <Link to={item.linkPath} tabIndex={index}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        </header>
      </div>
      {!currProfile && <ProfilesGate setCurrProfile={setCurrProfile} />}
    </div >
  );
}