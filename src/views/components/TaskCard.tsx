import React, {Component, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TodoContext} from '../../context/Context';
import moment from 'moment';
import {Colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  task: string;
  completed: boolean;
  createdAt: Date;
  index: number;
}

const TaskCard = (props: Props) => {
  const [pressed, setPressed] = useState(false);
  const {editTask, toggleTask, deleteTask} = useContext(TodoContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedToDo, setEditedToDo] = useState(props?.task);

  const handleDeleteTask = (index: number) => {
    Alert.alert(
      'Delete this task?',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteTask(index)},
      ],
    );
  };

  const handleEditTask = (index: number, editedTask: string) => {
    editTask(index, editedTask);
    setModalVisible(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderLeftWidth: pressed ? 5 : 0,
          borderLeftColor: pressed ? Colors.primaryGray : Colors.primaryGray,
        },
      ]}
      onPress={() => setPressed(!pressed)}>
      <View style={styles.contentWrapper}>
        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text={props?.task}
          iconStyle={{borderColor: Colors.primaryGray}}
          innerIconStyle={{borderWidth: 2}}
          textStyle={styles.task}
          onPress={() => toggleTask(props?.index)}
          isChecked={props?.completed}
        />
        <Text style={styles.date}>
          {moment(props?.createdAt).format('ddd MMM Do YYYY, hh:mm a')}
        </Text>
      </View>
      {pressed && (
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="edit" size={20} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleDeleteTask(props?.index)}>
            <AntIcon name="delete" size={20} color={'black'} />
          </TouchableOpacity>
        </View>
      )}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit the task</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your task here"
              placeholderTextColor={Colors.gray500}
              value={editedToDo}
              onChangeText={text => setEditedToDo(text)}
              autoFocus={true}
            />
            <View style={styles.modalBtnWrapper}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleEditTask(props?.index, editedToDo)}>
                <Text style={styles.modalBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: Colors.gray300,
    paddingLeft: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  contentWrapper: {
    width: '80%',
    backgroundColor: 'red',
  },
  btnWrapper: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    width: '20%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  task: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'JosefinSans-Regular',
    color: Colors.primaryBlack,
    lineHeight: 25,
  },
  date: {
    fontWeight: '300',
    fontSize: 14,
    marginLeft: 42,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 16,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.primaryBlack,
  },
  modalBtnWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '30%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  modalBtnText: {
    fontWeight: '500',
    fontSize: 15,
    color: Colors.primaryBlack,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'aquamarine',
    color: 'black',
  },
});

export default TaskCard;
