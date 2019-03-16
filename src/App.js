import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList';

class App extends Component {
  myTasks = []
  render() {
    return (
      <div>
        <ToDoList title='My stuff' tasks={this.myTasks} />

      </div>
    );
  }
}

export default App;
