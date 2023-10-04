import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import DashboardRoute from './src/route/DashboardRoute';
import {TodoContext} from './src/context/Context';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<any>([]);

  const addTasks = (text: string) => {
    setTasks([...tasks, {task: text, completed: false, createdAt: new Date()}]);
  };

  const value = {tasks, addTasks};

  return (
    <TodoContext.Provider value={value}>
      <NavigationContainer>
        <DashboardRoute />
      </NavigationContainer>
    </TodoContext.Provider>
  );
}

export default App;
