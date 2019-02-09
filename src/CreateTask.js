import React, { Component } from 'react';

class CreateTask extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        //console.log({name: event.target.value})
        this.setState({name: event.target.value})
    }

    keyDown = (event) => {
        if (event.keyCode === 13) { //klawisz enter
            this.props.createHandler(this.state.name)
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