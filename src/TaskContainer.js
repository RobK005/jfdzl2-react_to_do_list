import React, { Component } from 'react';

class TaskContainer extends Component {

    state = {
        day: 'sobota',
        tasks: [
            { id: 1, name:'Zakupy', complated: false},
            { id: 2, name:'Odkurzyć', complated: false},
            { id: 3, name:'Nauczyć Reacta', complated: false},
        ]
    }

    render() {
        return (
            <div>
                {this.state.tasks.map((task, index) => (
                    <p key={`t-${index}`}>{task.name}</p>
                ))}
            </div>
        )
    }
}

export default TaskContainer