import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Input,Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class Search extends Component {
    //運用List傳過來的findTodo
    find=()=>{
        const {findTodo}=this.props;
        const searchKey=document.getElementById("search").value;
        findTodo(searchKey);
    }
    render() {
        return (
        <div className="Search">
            <Row gutter={16}>
                <Col span={14} offset={4}>
                    <Input id="search" placeholder="代辦項目" autoComplete="off"/>
                </Col>
                <Col span={1}>
                    <Button onClick={this.find}>搜尋<SearchOutlined /></Button>
                </Col>
            </Row> 
        </div>
        );
    }
}