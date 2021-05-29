import React from "react";
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";


const TaskView = () => {
	return (
		<div className="container mt-3">
			<p className="display-6">Hi! You will find your tasks below:</p>
			<SearchTasks />
			<TaskList />
		</div>
	);
};

export default TaskView;
