import React, {useContext} from 'react';
import Context from '../../Context';
import BugPost from '../BugPost/BugPost';

export default function BugListDisplay() {
  const context = useContext(Context);

  function renderBugPosts() {
    const listOfBugs = context.state.bugs.map(bug => {
      return (
        <li
          key={bug.id}
        >
          <BugPost bug={bug}/>
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