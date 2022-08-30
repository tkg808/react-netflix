import './Browse.css';
import { useState } from 'react';
import ProfilesGate from '../../components/profilesGate/ProfilesGate';

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
      {!currProfile && <ProfilesGate setCurrProfile={setCurrProfile} />}
    </div >
  );
}