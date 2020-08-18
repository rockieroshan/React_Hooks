import React from 'react';
import './App.css';
import Context from './context';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';

function App() {
  return (
    <Context>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
        {/* </div> */}
        {/* <TaskList /> */}
      </div>
    </Context>
  );
}

export default App;
