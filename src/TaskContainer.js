import React, { Component } from 'react';

class TaskContainer extends Component {

    state = {
        day: 'sobota',
        tasks: ['Zakupy', 'Odkurzyć', 'Nauczyć Reacta']
    }

    render() {
        return (
            <div>
                {this.state.tasks.map((task, index) => (
                    <p key={index}>{task}</p>
                ))}
            </div>
        )
    }
}

export default TaskContainer