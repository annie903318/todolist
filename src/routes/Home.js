import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default class Home extends Component {
  state={
    todos:["看一本書","運動30分鐘","看voice tube 10 min","學習JS","學習React"]
  }
  addTodo = (item) =>{
    const {todos}=this.state;
    this.setState({
      todos: [...todos, item]
    },()=>{
       this.props.history.push('/list');
    });
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    window.localStorage.setItem('todoapp',
      JSON.stringify(this.state));
  }

  //render後執行一次
  componentDidMount() {
    const todoData = window.localStorage.getItem('todoapp');
    if (todoData) {
      const oldData = JSON.parse(todoData);
      this.setState({
        ...oldData
      })
    }
  }

  render() {
    const {todos}=this.state;
    return (
      <div className="Home">
        <Header addTodo={this.addTodo}/>
      </div>
    );
  }
}