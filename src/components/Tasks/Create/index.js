import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../../Button';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.state = {task: ''};
    }

    componentDidMount(){}

    onChangeInput(event){
        this.setState({task: event.target.value});
    }
    onSubmit(event){
        event.preventDefault()
    }
    onSubmitHandlerKey(event) {
        if (event.key === 'Enter') this.onSubmitHandler();
    }
    onSubmitHandler() {
        const {onSubmit} = this.props;
        (this.state.task !== '' ? onSubmit({title: this.state.task}) : alert('EMPTY INPUT'))
        this.setState({task: ''});
    }

    render(){
        return(
            <div className="create-task">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="text-task">NEW TASK: </label>
                    <input 
                        type = "text"
                        id = "text-task"
                        onChange = {this.onChangeInput.bind(this)}
                        onKeyUp = {this.onSubmitHandlerKey.bind(this)}
                        value = {this.state.task}
                        name = "task"
                        placeholder="TEXT INPUT"
                    ></input>
                    <Button onClick = {this.onSubmitHandler.bind(this)} innerText = 'SAVE' />
                </form>
            </div>
        )
    }
}

CreateTask.propTypes = {
    onSubmit: PropTypes.func
}
