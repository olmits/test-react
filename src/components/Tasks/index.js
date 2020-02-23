import React, { Component } from 'react';
import CreateTask from './Create';
import List from './List';
import TaskService from './../../services/tasks';

export default class Tasks extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {list: []};
    }

    async componentDidMount(){
        const list = await TaskService.getTasks('/list') || [];
        this.setState({list})
    }
    componentDidUpdate(){}

    async onItemDelete(item){
        console.log(item);
        
        const list = await TaskService.deleteTask('/item/', item.id)
        this.setState({list})
    }
    async onItemSubmit(task){
        
        const list = await TaskService.postTask('/item', task)
        this.setState({list})
    }   

    render(){
        return(
            <div className="container-tasks">
                <CreateTask onSubmit = {this.onItemSubmit.bind(this)}/>
                <List tasks = {this.state.list} onItemDelete = {this.onItemDelete.bind(this)} />
            </div>
        )
    }
}