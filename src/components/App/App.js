import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Context from '../../Context';
import Store from '../../Store';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import MainView from '../MainView/MainView';
import TrackedBugs from '../TrackedBugs/TrackedBugs';

export default class App extends Component {
  static contextType = Context;

  state = {
    bugs : Store.bugs,
    currentUser : Store.users[0]
    }

  removeTrackedBug = (bugId) => {
    const updatedUser = this.state.currentUser;
    updatedUser.bugsWorkingOn = updatedUser.bugsWorkingOn.filter(id => id !== bugId)

    this.setState({
      currentUser : updatedUser
    })
  }

  render() {

    return (
      <Context.Provider value={{
        state : this.state,
        removeTrackedBug : this.removeTrackedBug

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
        </main>
      </Context.Provider>
    );
  }
}