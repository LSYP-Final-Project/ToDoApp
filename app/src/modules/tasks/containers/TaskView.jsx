import React, { useState } from "react";
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";
import styled from 'styled-components';

const Container = styled.div`
   max-width: 768px;
`;

const TaskView = () => {
   const [searchtext, setSearchText] = useState("");
   const [filterType, setFilterType] = useState("title");

	return (
		<Container className="container mt-3">
			<p className="display-6">Hi! You will find your tasks below:</p>
			<SearchTasks setSearchText={setSearchText} setFilterType={setFilterType} />
			<TaskList searchtext={searchtext} filterType={filterType} />
		</Container>
	);
};

export default TaskView;
