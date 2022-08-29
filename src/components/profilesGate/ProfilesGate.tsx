import './ProfilesGate.css';
import { Link } from "react-router-dom";
import { LogoIcon } from '../../res/LogoIcon';
import { LockIcon } from '../../res/LockIcon';

interface Profile
{
  name: string;
  avatar: string;
  pin: number | null;
}

export default function ProfilesGate()
{
  const profilesList: Profile[] =
    [
      {
        name: "Bro",
        avatar: "https://occ-0-851-3419.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb9QgWa60sthoE78yJWn0lowWvGrQL_dI04plIvfpOKVXgw-IEc66W9PmWcKYXxN8cqBg75tfhIJtoFdmgZUoxcjgkj8Injecj8n.png?r=cad",
        pin: 1234
      },
      {
        name: "Profile 2",
        avatar: "https://occ-0-851-3419.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQJfAvjuvkCHyha03fRAjSHB0VPAkYSecZ8G_u0w6ZBnbeQsLiblJyNtzGtxF3vKVdNDGFQh4U-4pvPGzGKwITRYUsAIuRrvW3b7.png?r=8ff",
        pin: 5678
      },
      {
        name: "Profile 3",
        avatar: "https://occ-0-851-3419.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4",
        pin: null
      },
      {
        name: "Profile 4",
        avatar: "https://occ-0-851-3419.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTEYr5GclkFvWr7UwFeZpOL1oyV7oD98NciCdYxbhh88KEKn5uB_EcZ6Q_dIG9zNfu-4RvoOWfrLxyPODLCeMAdgsKe1W5JLoXos.png?r=a4b",
        pin: null
      },
      {
        name: "Profile 5",
        avatar: "https://occ-0-851-3419.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWY4hABBS1RnrPZcSnDVjgcX9j68wPjtJmwf2qPraFrNkfLlYCUIhwaveEEgrEKR3ACMky2WrYT6S8EOwCXiXj0QiErM-etAfQa3.png?r=11f",
        pin: null
      }
    ];

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
              profilesList.map((item, index) => 
              {
                return (
                  <li key={index}>
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
    </div>
  );
}