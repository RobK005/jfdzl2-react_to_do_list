import React, { Component } from 'react';

class CreateTask extends Component {

    handleChange = (event) => {
        console.log(event.target.value)
    }

    render() {
        return(
            <div>
                <input
                    type='text'
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default CreateTask