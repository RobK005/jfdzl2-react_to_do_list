import React, { Component } from 'react';
import Task from './Task'

class TaskContainer extends Component {

    state = {
        day: 'sobota',
        tasks: [
            { id: 1, name:'Zakupy', completed: false},
            { id: 2, name:'Odkurzyć', completed: false},
            { id: 3, name:'Nauczyć Reacta', completed: false},
        ]
    }

    render() {
        return (
            <div>

                {/* <Task fafik='Zakupy'/>
                <Task fafik='Odkurzyć'/>
                <Task fafik='Nauczyć Reacta'/> */}

                {/* ten sam zapis jest ponizej z metoda map */}

                {this.state.tasks.map((task, index) => (
                    <Task key={`t-${task.id}`} fafik={task.name}/>
                ))}
            </div>
        )
    }
}

export default TaskContainer