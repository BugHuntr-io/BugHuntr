import React from 'react';
import UserInfo from '../UserInfo/UserInfo';

export default function Header() {
  return (
    <div className="header force-row">
      <h1 className="logo">BugHuntr.io</h1>
      <UserInfo />
    </div>
  )
}