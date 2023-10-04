import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import DashboardRoute, {DashboardStack} from './src/route/DashboardRoute';
import {TodoContext} from './src/contextAPI/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Tasks {
  task: string;
  completed: boolean;
  createdAt: Date;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    const getAsyncData = async () => {
      try {
        const asyncData = await AsyncStorage.getItem('todoList');
        if (asyncData !== null) {
          let asyncList = JSON.parse(asyncData);
          setTasks(asyncList);
          console.log('response', asyncList);
        }
      } catch (err) {
        console.log('ASYNC STORAGE ERR:');
      } finally {
      }
    };
    getAsyncData();
  }, []);

  const addTask = (text: string) => {
    let allTasks = [...tasks];
    allTasks = [
      ...tasks,
      {task: text, completed: false, createdAt: new Date()},
    ];
    const writeInAsync = AsyncStorage.setItem(
      'todoList',
      JSON.stringify(allTasks),
    );
    setTasks(allTasks);
  };

  const editTask = (index: number, editedTask: string) => {
    console.log('edit index', index);
    let totalTasks = [...tasks];
    let editedValue = {
      ...tasks[index],
      task: editedTask,
    };
    totalTasks.splice(index, 1, editedValue);
    const writeInAsync = AsyncStorage.setItem(
      'todoList',
      JSON.stringify(totalTasks),
    );
    setTasks(totalTasks);
  };

  const toggleTask = (index: number) => {
    console.log('toggle index', index);
    let completedTask = [...tasks];
    completedTask[index].completed = !completedTask[index].completed;
    const writeInAsync = AsyncStorage.setItem(
      'todoList',
      JSON.stringify(completedTask),
    );
    setTasks(completedTask);
  };

  const deleteTask = (index: number) => {
    console.log('delete index', index);
    let totalTasks = [...tasks];
    totalTasks.splice(index, 1);
    const writeInAsync = AsyncStorage.setItem(
      'todoList',
      JSON.stringify(totalTasks),
    );
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
