import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
	if ((Array.isArray(tasks) && !tasks.length) || typeof tasks === 'undefined') return (
		<div className="alert alert-info" role="alert">
			No tasks to show 🤷
		</div>
	);

	return (
		<div>
			<div className="list-group">
				{tasks.map((t) => <TaskCard key={t.id} task={t} />)}
			</div>
		</div>
	);
};

export default TaskList;
