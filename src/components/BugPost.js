import React from 'react';
import Context from '../../Context.js';
import Buttons from './Buttons.js';

export default function BugPost() {
  return (
    <div className="bug-post">
      <img class="bug-post-image" src="" alt="">
      <div className="bug-post-content">
        <h3 className="bug-post-title">Bug Post Title</h3>
        <h3 className="bug-post-bounty">Bounty</h3>
        <p className="bug-post-description">Check out my bug</p>
        {Buttons.PursueButton}
      </div>
    </div>
  )
}