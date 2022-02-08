import React, {useState} from "react";
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from 'react-redux';
// import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from "uuid";
// import {todoListSelector, searchTextFilter} from "../../redux/selectors";
import {todosRemaining} from "../../redux/selectors";
import todoListSlice from "./todoListSlice";


export default function TodoList() {

  const todos = useSelector(todosRemaining);
  // const todos = useSelector(todoListSelector);
  const dispatch = useDispatch();

  const [input, setInput]=useState("");
  const [priority, setPriority]=useState("Medium");

  // ============= DÙNG REDUX THUẦN ============
  // const handleAddTodoClick=()=>{
  //   const data={
  //     id: uuidv4(),
  //     name:input,
  //     completed: false,
  //     priority: priority
  //   };
  //   dispatch(addTodo(data));
  //   // clear input
  //   setInput("");
  // }

  // ============ DÙNG REDUX-TOOLKIT =================
  const handleAddTodoClick=()=>{
    const data={
      id: uuidv4(),
      name:input,
      completed: false,
      priority: priority
    };
    dispatch(todoListSlice.actions.addTodo(data));
    // clear input
    setInput("");
  }



  const handleChangeInput=(e)=>{
    setInput(e.target.value);
  }

  const handleChangePriority=(value)=>{
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todos && todos.map((item)=>(
            <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed={item.completed} />
          ))
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input type="text" value={input} onChange={handleChangeInput}/>
          <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodoClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
