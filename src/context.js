import React, { useState, createContext, useEffect } from 'react';
import { v1 as uuid } from 'uuid';

export const TaskListContext = createContext();

const Context = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTask] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTask([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTask(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTask(newTask);
    setEditItem(null);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editTask,
        addTask,
        removeTask,
        findItem,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default Context;
