import './ProfilesGate.css';
import { Dispatch, SetStateAction } from 'react';
import { Link } from "react-router-dom";
import { LogoIcon } from '../../res/LogoIcon';
import { LockIcon } from '../../res/LockIcon';
import { profilesDataList } from '../../res/profilesDataList';

interface Profile
{
  name: string;
  avatar: string;
  pin: number | null;
}

interface Props
{
  setCurrProfile: Dispatch<SetStateAction<Profile | null>>;
}

export default function ProfilesGate({ setCurrProfile }: Props)
{
  return (
    <div className="profiles-gate">
      <div className="pinned-header-container">
        <div className="header-container">
          <header>
            <Link to="">
              <LogoIcon />
            </Link>
          </header>
        </div>
      </div>
      <div className="centered-container">
        <div className="profiles-container">
          <h1 className="title">Who's watching?</h1>
          <ul className="profiles-list">
            {
              profilesDataList.map((item, index) => 
              {
                return (
                  <li key={index} onClick={() => setCurrProfile(item)} >
                    <img className="avatar" src={item.avatar} alt="" />
                    <span className="name">{item.name}</span>
                    {item.pin && <LockIcon />}
                  </li>
                )
              })
            }
          </ul>
          <span className="link-container">
            <Link to="" className="manage-profiles-link">Manage Profiles</Link>
          </span>
        </div>
      </div>
    </div >
  );
}