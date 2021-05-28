import React from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { getAllTodos } from "../../../redux/reducers/todos";

const TaskList = () => {
	const tasksTab = useSelector(getAllTodos);

	return (
		<div>
			<div className="list-group">
				{tasksTab?.map((t) => (
					<TaskCard key={t.id} task={t} />
				))}
			</div>
		</div>
	);
};

export default TaskList;
