import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {TodoContext} from '../../context/Context';
import {DashboardStack} from '../../route/DashboardRoute';
import {Colors} from '../../utils/colors';

const ToDoListing = () => {
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();
  const {tasks} = useContext(TodoContext);

  console.log({tasks});

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddNewToDo')}>
        <Icons name="plus" size={35} color={Colors.primaryWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryWhite,
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
