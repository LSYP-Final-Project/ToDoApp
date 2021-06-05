import React from "react";
import { useSelector } from "react-redux";
import { getAllTodos } from "Redux/reducers/todos";
import TaskCard from "./TaskCard";

const TaskList = () => {
	const tasksTab = useSelector(getAllTodos);
	console.log(tasksTab)
	if (Array.isArray(tasksTab) && !tasksTab.length) return (
		<div className="alert alert-info" role="alert">
			No tasks to show 🤷
		</div>
	);

	return (
		<div>
			<div className="list-group">
				{tasksTab.map((t) => <TaskCard key={t.id} task={t} />)}
			</div>
		</div>
	);
};

export default TaskList;
