import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import BugListDisplay from '../BugListDisplay/BugListDisplay';

export default class MainView extends Component {
  render() {
    return (
      <div className="main-view force-row">
        <SideBar />
        <BugListDisplay />
      </div>
    )
  }
}