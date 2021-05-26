import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isSwitched: boolean;
}

export function TodoInput({ addTask, isSwitched }: TodoInputProps) {
  const [task, setTask] = useState('');

  useEffect(() => {},[task])

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={
        [
          styles.inputContainer,
          Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
          {backgroundColor: isSwitched ? '#34313D' : '#F5F4F8'},
        ]
      }
    >
      <TextInput 
        style={[styles.input, isSwitched ? {backgroundColor: '#34313D', color: '#FF79C6'} : {backgroundColor: '#F5F4F8', color: '#000'}]}
        placeholderTextColor={'#A09CB1'}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={() => handleAddNewTask()}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, {backgroundColor: isSwitched ? '#988BC7' : '#3FAD27'}]}
        onPress={() => handleAddNewTask()}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});