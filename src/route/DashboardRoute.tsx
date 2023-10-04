import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Easing} from 'react-native';
import AddNewToDo from '../views/screens/AddNewToDo';
import ToDoListing from '../views/screens/ToDoListing';

const Stack = createStackNavigator<DashboardStack>();

export type DashboardStack = {
  ToDoListing: undefined;
  AddNewToDo: undefined;
};

export default function DashboardRoute() {
  const config: any = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  type Config = {
    animation: string;
    config: {
      duration: number;
      easing: Function;
    };
  };

  return (
    <Stack.Navigator
      initialRouteName="ToDoListing"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen name="ToDoListing" component={ToDoListing} />
      <Stack.Screen name="AddNewToDo" component={AddNewToDo} />
    </Stack.Navigator>
  );
}
