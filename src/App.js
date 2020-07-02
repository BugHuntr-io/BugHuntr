import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainView from './components/MainView';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <NavBar />
        <MainView />
      </main>
    );
  }
}