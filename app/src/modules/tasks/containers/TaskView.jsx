import React, { useState } from "react";
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";


const TaskView = () => {
	const [searchtext, setSearchText] = useState("");
	const [filterType, setFilterType] = useState("title");

	return (
		<div className="container mt-3">
			<p className="display-6">Hi! You will find your tasks below:</p>
			<SearchTasks setSearchText={setSearchText} setFilterType={setFilterType} />
			<TaskList searchtext={searchtext} filterType={filterType} />
		</div>
	);
};

export default TaskView;
