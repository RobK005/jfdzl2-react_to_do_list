import React, { Component } from 'react';
import Task from './Task'

class TaskContainer extends Component {

    state = {
        day: 'sobota',
        tasks: [
            { id: 1, name:'Zakupy', completed: true},
            { id: 2, name:'Odkurzyć', completed: false},
            { id: 3, name:'Nauczyć Reacta', completed: false}
        ]
    }

    render() {
        return (
            <div>
                {this.state.tasks.map(task => (
                    <Task
                    key={`t-${task.id}`}
                    fafik={task.name}
                    mruczek={task.completed}
                    />
                ))}
            </div>
        )
    }
}

export default TaskContainer