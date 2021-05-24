import React from "react";
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";

const TaskView = () => {
	return (
		<div className="container-sm mt-3 w-75">
			<p className="display-6">Hello! This is your tasks:</p>
			<SearchTasks />
			<TaskList />
		</div>
	);
};

export default TaskView;
