import React, { useContext } from 'react';
import Context from '../../Context';

export default function BugPostExpanded(props) {
  const context = useContext(Context);
  let buttonFunction;
  let buttonText = '';

  const currentBug = context.state.bugs.find(bug => bug.id === props.match.params.bugId)

  if (context.state.currentUser.bugsWorkingOn.includes(props.match.params.bugId)) {
    buttonFunction = context.removeTrackedBug;
    buttonText = 'Give Up';
  }
  else {
    buttonFunction = context.pursueBug;
    buttonText = 'Pursue';
  }

  function handleButtonClick() {
    buttonFunction();
  };

  return (
    <div>
      <img className="bug-post-image" src="" alt="" />
      <div className="bug-post-content">
        <h3 className="bug-post-title">{currentBug.title}</h3>
        <h3 className="bug-post-bounty">Bounty: {currentBug.currentBounty}</h3>
        <p className="bug-post-description">{currentBug.description}</p>
        <button onClick={handleButtonClick} className="bug-post-button">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
