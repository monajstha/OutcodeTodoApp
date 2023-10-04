import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DashboardStack} from '../../route/DashboardRoute';
import Icons from 'react-native-vector-icons/Feather';
import {TodoContext} from '../../contextAPI/Context';
import Header from '../components/Header';

const AddNewToDo = () => {
  const {tasks, addTask} = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();

  const handleAddTask = (task: string) => {
    setTodo('');
    addTask(task);
    Keyboard.dismiss();
    setTimeout(() => {
      navigation.navigate('ToDoListing');
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Header backBtn title="New task" />
      <View style={styles.contentWrapper}>
        <Text style={styles.headerText}>Add a new task</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          placeholderTextColor={Colors.gray500}
          value={todo}
          onChangeText={text => setTodo(text)}
          autoFocus={true}
        />
      </View>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => handleAddTask(todo)}>
        <Icons name="check" size={35} color={Colors.primaryWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    // padding: 16,
    backgroundColor: Colors.primaryBackground,
  },
  contentWrapper: {
    padding: 16,
  },

  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#0b032d',
    color: 'black',
  },
  addBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.primaryGray,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 40,
    right: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 23,
    color: Colors.primaryBlack,
  },
});

//make this component available to the app
export default AddNewToDo;
