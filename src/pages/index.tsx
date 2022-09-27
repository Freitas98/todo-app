import { useState } from "react";
import TaskList from "../model/TaskList";
import List from "../components/list/List";
import initialTasks from "../data/mock"
import Header from "../components/template/Header";
import Content from "../components/template/Content";
import Form from "../components/form/Form";
import Task from "../model/Task";

export default function Home() {

  const [tasks, setTasks] = useState<TaskList>(initialTasks)

  function newTaskCreated(newTask: Task) {
    setTasks(tasks.addTask(newTask))
  }

  function onChange(newTasks: TaskList) {
    setTasks(newTasks)
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300 overflow-y-auto`}>
        <Header>
          <Form
            newTaskCreated={newTaskCreated}
          />
        </Header>
        <Content>
          <List 
            tasks={tasks} 
            onChange={onChange}
          />
        </Content>
    </div>
  )
}
