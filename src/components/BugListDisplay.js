import React from 'react';
// import Context from '../../Context.js';
import Store from '../Store';
import BugPost from './BugPost';

export default function BugListDisplay() {

  function renderBugPosts() {
    const listOfBugs = Store.bugs.map(() => {
      return (
        <li><BugPost /></li>
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