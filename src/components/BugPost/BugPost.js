import React from 'react';

export default function BugPost(props) {
  function handleButtonClick() {
    props.buttonAction(props.bug.id);
  };

  return (
    <div className="bug-post">
      <img className="bug-post-image" src="" alt="" />
      <div className="bug-post-content">
        <h3 className="bug-post-title">{props.bug.title}</h3>
        <h3 className="bug-post-bounty">{props.bug.currentBounty}</h3>
        <p className="bug-post-description">{props.bug.description}</p>
        <button onClick={handleButtonClick}>
          <img src={props.image} alt="bug post button"></img>
        </button>
      </div>
    </div>
  )
}