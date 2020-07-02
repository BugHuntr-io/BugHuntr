import React from 'react';
import Context from '../../Context.js';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div id="main-tab">Main</div>
      <div id="tracked-bugs-tab">Tracked bugs</div>
      <div id="post-bounty-tab">Post Bounty</div>
      <div id="my-bugs-tab">My Bugs</div>
    </div>
  )
}