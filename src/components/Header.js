import React from 'react';
import UserInfo from './UserInfo/UserInfo.js';

export default function Header() {
  return (
    <div>      
        <h1 className="logo">BugHuntr.io</h1>      
        <UserInfo />
    </div>
  )
}