import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import DashboardRoute, {DashboardStack} from './src/route/DashboardRoute';
import {TodoContext} from './src/context/Context';
import {StackNavigationProp} from '@react-navigation/stack';

export interface Tasks {
  task: string;
  completed: boolean;
  createdAt: Date;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, {task: text, completed: false, createdAt: new Date()}]);
  };

  const editTask = (index: number, editedTask: string) => {
    console.log('edit index', index);
    let totalTasks = [...tasks];
    let editedValue = {
      ...tasks[index],
      task: editedTask,
    };
    totalTasks.splice(index, 1, editedValue);
    setTasks(totalTasks);
  };

  const toggleTask = (index: number) => {
    console.log('toggle index', index);
    let completedTask = [...tasks];
    completedTask[index].completed = !completedTask[index].completed;
    setTasks(completedTask);
  };

  const deleteTask = (index: number) => {
    console.log('delete index', index);
    let totalTasks = [...tasks];
    totalTasks.splice(index, 1);
    setTasks(totalTasks);
  };

  const value = {tasks, addTask, editTask, toggleTask, deleteTask};

  return (
    <TodoContext.Provider value={value}>
      <NavigationContainer>
        <DashboardRoute />
      </NavigationContainer>
    </TodoContext.Provider>
  );
}

export default App;
