import React, { useContext } from 'react';
import BugPost from '../BugPost/BugPost';
import Context from '../../Context';
import giveUpButton from '../../images/give-up-button.png';

export default function TrackedBugs() {
  const context = useContext(Context);

  function renderBugPosts() {
    const currentUser = context.state.currentUser;
    const currentUsersBugs = [];

    if (currentUser.bugsWorkingOn.length > 0) {
      context.state.bugs.forEach(bug => {
        if (currentUser.bugsWorkingOn.includes(bug.id)) {
          currentUsersBugs.push(bug);
        }
      });

      const bugList = currentUsersBugs.map(bug => {
        return (
          <li
            key={bug.id}
          >
            <BugPost
              bug={bug}
              buttonAction={context.removeTrackedBug}
              buttonText='Give Up'
            />
          </li>
        )
      });
      return bugList;
    }

    else {
      return (
        <span>No tracked bugs!</span>
      )
    }
  }

  return (
    <div className="tracked-bugs-component">
      <ul className="bug-post-list">
        {renderBugPosts()}
      </ul>
    </div>
  )
}