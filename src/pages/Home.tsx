import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSwitched, setIsSwitched] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    const task: Task = {
      id: new Date().getTime(),
      done: false,
      title: newTaskTitle,
    }
    newTaskTitle.length > 0 && setTasks([...tasks, task])
  }

  function handleMarkTaskAsDone(id: number) {
    let newTasks: Task[] = []
    tasks.map((task) => {
      if (task.id === id) {
        const newTask = {
          id: task.id,
          done: !task.done,
          title: task.title
        }
        newTasks.push(newTask);
      } else {
        task.id !== id && newTasks.push(task);
      }
    })
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id && task)
    setTasks(newTasks);
  }

  return (
    <View style={{backgroundColor: isSwitched ? '#191622' : '#fff', flex: 1}}>
      <Header isSwitched={isSwitched} />
      <Switch
        style={styles.switch}
        trackColor={{false: '#34313D', true: '#A09CB1'}}
        thumbColor={isSwitched ? '#34313D' : '#A09CB1'}
        onValueChange={setIsSwitched}
        value={isSwitched}
      />
      <TodoInput isSwitched={isSwitched} addTask={handleAddTask} />

      <MyTasksList
        isSwitched={isSwitched}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switch: {
    position: 'absolute',
    top: 55,
    right: 40
  }
});