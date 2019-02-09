import React, { Component } from 'react';

class Task extends Component {

    render() {
        const styles = this.props.task.completed ? { textDecoration: 'line-through' } : {}
        return (
            <div>
                <p style={styles}>
                    <input
                        type='checkbox'
                        checked={this.props.task.completed}
                        onChange={this.props.handleChange}

                    />
                    {this.props.task.name}
                </p>
                <button onClick={this.props.handleRemove}>XXX</button>
            </div>
        )
    }
}

export default Task