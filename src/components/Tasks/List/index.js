import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import './style.css';

export default class List extends Component {
    
    onTaskDelete(task){
        const {onItemDelete} = this.props;
        onItemDelete(task);
    }
    render(){
        const {tasks} = this.props;

        return(
            <table>
                <thead><tr><th>ID</th><th>TITLE</th><th>ACTION</th></tr></thead>
                <tbody>
                    {
                        tasks.map(task => <ListItem 
                                                key={task.id}
                                                task={task}
                                                onTaskDelete={this.onTaskDelete.bind(this)} />)
                    }
                </tbody>
            </table>
        )
    }
}

List.propTypes = {
    task: PropTypes.array,
    onItemDelete: PropTypes.func
}