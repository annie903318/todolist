import React, { Component } from 'react';
import Search from "../Components/Search";
import Item from "../Components/Item";

export default class List extends Component {
  state={
    todos:["看一本書","運動30分鐘","看voice tube 10 min","學習JS","學習React"]
  }
  //刪除
  deleteTodo = (item) =>{
    const {todos}=this.state;
    var array = [...todos];
    array=array.filter(function(element,index,array){
      return element!==item;
    });
    this.setState({todos: array});
    // const index=array.indexOf(item);
    // if(index!==-1){
    //   array.splice(index,1);
    //   this.setState({todos:array},()=>{
    //   this.props.history.push("/");
    // })}
  }
  //尋找
  findTodo = (item) =>{
    //從localStorage抓資料
    const todoData = window.localStorage.getItem('todoapp');
    let storage=JSON.parse(todoData);
    storage=storage.todos;
    //回傳結果
    let cnt=0;
    storage.forEach((element,index,array) => {
      if(element===item){
        alert(`No.${index} : ${element}`);
      }else{
        cnt++;
      }
    });
    if(cnt===storage.length){
      alert("Not Found");
    }
  }
  //修改
  editTodo = (oldTodo,newTodo) =>{
    const {todos}=this.state;
    const array = [...todos];
    const index = array.indexOf(oldTodo);
    array[index]=newTodo;
    this.setState({todos: array});
  }
  //Component有變更就存到localStorage
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
      <div className="List">
        <Search findTodo={this.findTodo}/>
        <br/>
        {todos.map(todo => (
          <Item todo={todo} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
        ))}
      </div>
    );
  }
}