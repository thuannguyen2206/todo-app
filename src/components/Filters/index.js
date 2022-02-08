import React, { useState } from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
// import {
//   setSearchTextFilter,
//   setStatusFilter,
//   setPrioritiesFilter,
// } from "../../redux/actions";
import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priorities, setPriorities] = useState([]);

  // =================== DÙNG REDUX THUẦN ==============
  
  // const handleChangeSearchText = (e) => {
  //   let search = e.target.value;
  //   setSearchText(search);
  //   dispatch(setSearchTextFilter(search));
  // };

  // const handleChangeStatus = (e) => {
  //   let status = e.target.value;
  //   setStatus(status);
  //   dispatch(setStatusFilter(status));
  // };

  // const handleChangePriorities = (value) => {
  //   setPriorities(value);
  //   dispatch(setPrioritiesFilter(value));
  // };


  // ==================== DÙNG REDUX-TOOLKIT =================
  const handleChangeSearchText = (e) => {
    let search = e.target.value;
    setSearchText(search);
    dispatch(filtersSlice.actions.setSearchTextFilter(search));
  };

  const handleChangeStatus = (e) => {
    let status = e.target.value;
    setStatus(status);
    dispatch(filtersSlice.actions.setStatusFilter(status));
  };

  const handleChangePriorities = (value) => {
    setPriorities(value);
    dispatch(filtersSlice.actions.setPrioritiesFilter(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleChangeSearchText}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priorities}
          onChange={handleChangePriorities}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
