import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos, fetchTodos } from "Redux/reducers/todos";
import TaskCard from "./TaskCard";

const TaskList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	});

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