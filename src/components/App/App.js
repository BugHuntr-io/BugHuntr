import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Context from '../../Context';
import Store from '../../Store';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import MainView from '../MainView/MainView';
import TrackedBugs from '../TrackedBugs/TrackedBugs';
import PostBounty from '../PostBounty/PostBounty';
import BugPostExpanded from '../BugPostExpanded/BugPostExpanded';

export default class App extends Component {
  static contextType = Context;

  state = {
    bugs: Store.bugs,
    currentUser: Store.users[0],
    displayedBugs: [],
    currentPage: 1
  }

  removeTrackedBug = (bugId) => {
    const updatedUser = this.state.currentUser;
    updatedUser.bugsWorkingOn = updatedUser.bugsWorkingOn.filter(id => id !== bugId)

    this.setState({
      currentUser: updatedUser
    })
  }

  pursueBug = (bugId) => {
    const updatedUser = this.state.currentUser;
    const clickedBug = this.state.bugs.find(bug => bug.id === bugId)
    if (!updatedUser.bugsWorkingOn.includes(clickedBug.id)) {
      updatedUser.bugsWorkingOn.push(clickedBug.id)

      this.setState({
        currentUser: updatedUser
      })
    } else {
      alert('You are already tracking this bug!');
    }
  }

  postNewBounty = (newBug) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 30f6f081-6829-472b-bc08-c556a924490a'
      },
      body: JSON.stringify(newBug)
    };
    fetch('http://localhost:8000/bugs', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getStore = () => {
    console.log('hit get store');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 30f6f081-6829-472b-bc08-c556a924490a'
      }
    };
    fetch('http://localhost:8000/bugs', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {

    return (
      <Context.Provider value={{
        state: this.state,
        removeTrackedBug: this.removeTrackedBug,
        pursueBug: this.pursueBug,
        postNewBounty: this.postNewBounty,
        getStore: this.getStore

      }}>
        <main className="App">
          <Header />
          <NavBar />
          <Route exact path="/">
            <MainView />
          </Route>
          <Route exact path="/tracked-bugs">
            <TrackedBugs />
          </Route>
          <Route
            path="/bug-post-expanded/:bugId"
            component={BugPostExpanded} />
          <Route exact path="/post-bounty">
            <PostBounty />
          </Route>
        </main>
      </Context.Provider>
    );
  }
}