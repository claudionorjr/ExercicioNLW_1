import React, { useState } from 'react';

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
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}