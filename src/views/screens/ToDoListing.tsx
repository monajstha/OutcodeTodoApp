import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {Tasks} from '../../../App';
import {TodoContext} from '../../contextAPI/Context';
import {DashboardStack} from '../../route/DashboardRoute';
import {Colors} from '../../utils/colors';
import {EmptyDataComponent} from '../components/EmptyData';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';

const ToDoListing = () => {
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();

  // accessing tasks using the useContext hook
  const {tasks} = useContext(TodoContext);

  console.log({tasks});

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All tasks" />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => {
          return (
            <TaskCard
              task={item?.task}
              completed={item?.completed}
              createdAt={item?.createdAt}
              index={index}
            />
          );
        }}
        ListEmptyComponent={<EmptyDataComponent />}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddNewToDo')}>
        <Icons name="plus" size={35} color={Colors.primaryWhite} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    position: 'relative',
  },
  addBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 40,
    right: 15,
  },
});

export default ToDoListing;
