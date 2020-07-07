import React from 'react';
import { Link } from 'react-router-dom'

export default function BugPost(props) {
  function handleButtonClick() {
    props.buttonAction(props.bug.id);
  };

  return (
    <div className="bug-post force-row">
      <img className="bug-post-image" src="" alt="" />
      <div className="bug-post-content">
        <Link to={`/bug-post-expanded/${props.bug.id}`}><h3 className="bug-post-title">{props.bug.title}</h3></Link>
        <h3 className="bug-post-bounty">Bounty: {props.bug.currentBounty}</h3>
        <p className="bug-post-description">{props.bug.description}</p>
        <button onClick={handleButtonClick} className="bug-post-button">
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}