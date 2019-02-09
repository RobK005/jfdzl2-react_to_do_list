import React, { Component } from 'react';
import TaskContainer from './TaskContainer'
import CreateTask from './CreateTask'

class App extends Component {

  state = {
    day: 'sobota',
    tasks: [
      { id: 1, name: 'Zakupy', completed: true },
      { id: 2, name: 'Odkurzyć', completed: false },
      { id: 3, name: 'Nauczyć Reacta', completed: false }
    ]
  }

  handleChange = (event, taskId) => {
    // console.log('Kliknięto mnie', taskId)
    // console.log(event.target.checked)

    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId)
    const task = this.state.tasks[taskIndex]

    task.completed = event.target.checked

    const tasks = [...this.state.tasks]
    tasks[taskIndex] = task

    this.setState({ tasks: tasks }) // this.setState({ tasks })
  }

  handleCreate = (name) => {
    //console.log('Task name: ', name);
    const uuId = Math.floor(Math.random() * 10000)
    const tasks = [...this.state.tasks]
    const task = { id: uuId, name: name, completed: false}
    tasks.push(task)
    this.setState({tasks: tasks})
  }

  render() {
    return (
      <div className="App">
        <CreateTask createHandler={this.handleCreate}/>
        <TaskContainer
          todos={this.state.tasks}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
