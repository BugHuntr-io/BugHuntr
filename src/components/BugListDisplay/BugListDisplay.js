import React, { useContext } from 'react';
import Context from '../../Context';
import BugPost from '../BugPost/BugPost';
import giveUpButton from '../../images/give-up-button.png';

export default function BugListDisplay() {
  const context = useContext(Context);

  function renderBugPosts() {
    const listOfBugs = context.state.bugs.map(bug => {
      return (
        <li
          key={bug.id}
        >
          <BugPost
            bug={bug}
            buttonAction={context.pursueBug}
            buttonText='Pursue'
          />
        </li>
      )
    })

    return listOfBugs;
  }

  return (
    <ul className="bug-post-list">
      {renderBugPosts()}
    </ul>
  )
}