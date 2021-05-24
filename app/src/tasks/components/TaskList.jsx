import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: true,
	},
	{
		userId: 1,
		id: 3,
		title: "fugiat veniam minus",
		completed: false,
	},
];

const TaskList = () => {
	return (
		<div className="list-group">
			{tasks.map((t) => (
				<TaskCard key={t.id} {...t} />
			))}
		</div>
	);
};

export default TaskList;
