import React from 'react';
import { Link } from 'react-router-dom'
// import Context from '../../Context.js';

export default function NavBar() {
  return (
    <div className="nav-bar force-row">
      <a className="nav-link" id="main-tab">Main</a>
      <a className="nav-link" id="tracked-bugs-tab">Tracked bugs</a>
      <a className="nav-link" id="post-bounty-tab">Post Bounty</a>
      <a className="nav-link" id="my-bugs-tab">My Bugs</a>
    </div>
  )
}