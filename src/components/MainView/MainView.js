import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import BugListDisplay from '../BugListDisplay/BugListDisplay';
import Context from '../../Context';

export default class MainView extends Component {
  componentDidMount() {
    this.context.getStore();
  }

  render() {
    return (
      <div className="main-view force-row">
        <SideBar />
        <BugListDisplay />
      </div>
    )
  }
}

MainView.contextType = Context;