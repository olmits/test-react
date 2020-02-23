import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../../../Button';

export default class ListItem extends Component {
    
    componentDidMount(){}

    onDeleteHandler(){
        const {onTaskDelete, task} = this.props;
        onTaskDelete(task);
    }
    
    render(){
        const {task} = this.props;

        return(
            <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td><Button onClick = {this.onDeleteHandler.bind(this)} innerText = 'DELETE' /></td>
            </tr>
        );
    }
}

ListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    task: PropTypes.object,
    onTaskDelete: PropTypes.func
}