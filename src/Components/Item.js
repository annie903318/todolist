import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col,Button } from 'antd';
import { EditTwoTone,DeleteTwoTone } from '@ant-design/icons';

export default class Item extends Component {
    delete = () => {
        const {todo,deleteTodo}=this.props;
        deleteTodo(todo);
        
    }
    edit = () => {
        const {todo,editTodo}=this.props;
        var newTodo = prompt("修改代辦事項","");
        if(newTodo!=null && newTodo!=""){
            editTodo(todo,newTodo);
        }
    }
    render() {
        const {todo}=this.props;
        return (
            <div className="Item">
                <Row gutter={24,24}>
                    <Col span={10} offset={4}>
                        <p>{todo}</p>
                    </Col>
                    <Col span={2} offset={1}>
                        <Button onClick={this.edit}><EditTwoTone />修改</Button>
                    </Col>
                    <Col span={2} offset={1}>
                        <Button onClick={this.delete}><DeleteTwoTone twoToneColor="red"/>刪除</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}