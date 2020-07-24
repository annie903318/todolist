import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Input,Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export default class Header extends Component {
    //運用Home傳過來的addTodo
    add=()=>{
        const {addTodo}=this.props;
        const inp=document.getElementById("inp").value;
        addTodo(inp);    
    }
    render() {
        return (
        <div className="Header">
            <h1>To Do List</h1>
            <Row gutter={16}>
                <Col span={14} offset={4}>
                    <Input id="inp" placeholder="請輸入代辦項目" autoComplete="off"/>
                </Col>
                <Col span={4}>
                    <Button onClick={this.add}>新增<PlusCircleOutlined /></Button>
                </Col>
            </Row>
        </div>
        );
    }
}