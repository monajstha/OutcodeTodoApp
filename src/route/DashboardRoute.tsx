import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddNewToDo from '../views/screens/AddNewToDo';
import ToDoListing from '../views/screens/ToDoListing';

const Stack = createStackNavigator<DashboardStack>();

export type DashboardStack = {
  ToDoListing: undefined;
  AddNewToDo: undefined;
};

export default function DashboardRoute() {
  return (
    <Stack.Navigator
      initialRouteName="ToDoListing"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="ToDoListing" component={ToDoListing} />
      <Stack.Screen name="AddNewToDo" component={AddNewToDo} />
    </Stack.Navigator>
  );
}
