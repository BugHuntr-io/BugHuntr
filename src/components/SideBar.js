import React, { Component } from 'react';
import Leaderboard from './Leaderboard';

export default function SideBar(props) {
  return (
    <div className="side-bar force-column">
      <button>filter</button>
      <Leaderboard />
    </div>
  )
}