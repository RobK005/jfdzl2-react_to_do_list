import React, { Component } from 'react';

class Task extends Component {

    handleChange = (event) => {
        console.log('Kliknięto mnie')
        console.log(event.target.checked)
    }

    render() {
        const styles = this.props.mruczek ? {textDecoration: 'line-through'} : {}
        return (
            <div>
                <p style={styles}>
                    <input
                        type='checkbox'
                        checked={this.props.mruczek}
                        onChange={this.handleChange}

                    />
                    {this.props.fafik}
                </p>
            </div>
        )
    }
}

export default Task