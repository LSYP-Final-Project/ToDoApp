import React from "react";
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";
import styled from 'styled-components';

const Container = styled.div`
   max-width: 768px;
`;

const TaskView = () => {
	return (
		<Container className="container mt-3">
			<p className="display-6">Hi! You will find your tasks below:</p>
			<SearchTasks />
			<TaskList />
		</Container>
	);
};

export default TaskView;
