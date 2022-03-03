import React from 'react';
import ProfileCard from '../components/ProfileCard';

export default function UserPage(props) {
  return (
    <div className="container">
      <ProfileCard username={props.username}/>
    </div>
  )
}
