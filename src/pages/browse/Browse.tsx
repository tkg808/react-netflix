import './Browse.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilesGate from '../../components/profilesGate/ProfilesGate';
import { LogoIcon } from '../../res/LogoIcon';
import { SearchIcon } from '../../res/SearchIcon';
import { BellIcon } from '../../res/BellIcon';
import { tabsDataList } from '../../res/tabsDataList';
import { CgClose } from 'react-icons/cg';

interface Profile
{
  name: string;
  avatar: string;
  pin: number | null;
}

export default function Browse()
{
  const [currProfile, setCurrProfile] = useState<Profile | null>(null);
  const [searchInput, setSearchInput] = useState<string>("")
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  function searchClick(): void
  {
    setSearchFocused(!searchFocused);
  }

  function resetInput(): void
  {
    setSearchInput("");
  }

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
                <div className={"search-box" +
                  (searchFocused ? " open" : " close")}>
                  <button
                    className={"search-tab" + (searchFocused ? " open" : " close")}
                    onClick={searchClick}
                    disabled={searchInput.length > 0}>
                    <SearchIcon />
                  </button>
                  <form className="search">
                    <label htmlFor="secondary-nav-search-input" />
                    <input
                      type="text" id="secondary-nav-search-input"
                      className={(searchFocused ? "open" : "close")}
                      placeholder="Titles, people, genres"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onBlur={() => !searchInput && searchClick()}
                    />
                  </form>
                  {
                    searchFocused &&
                    <span className="icon-close">
                      {searchInput && <CgClose onClick={resetInput} />}
                    </span>
                  }
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
      </div >
      {!currProfile && <ProfilesGate setCurrProfile={setCurrProfile} />
      }
    </div >
  );
}