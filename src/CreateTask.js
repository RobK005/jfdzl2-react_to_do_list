import React, { Component } from 'react';

class CreateTask extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        console.log({name: event.target.value})
    }

    keyDown = (event) => {
        if (event.keyCode === 13) { //klawisz enter

        }
    }

    render() {
        return(
            <div>
                <input
                    type='text'
                    onChange={this.handleChange}
                    onKeyDown={this.keyDown}
                />
            </div>
        )
    }
}

export default CreateTask