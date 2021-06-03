import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos, setTodos } from "Redux/reducers/todos";
import TaskCard from "./TaskCard";

const TaskList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTodos());
	}, []);

	const tasksTab = useSelector(getAllTodos);
	console.log(tasksTab);

	return (
		<div>
			<div className="list-group">
				{typeof tasksTab !== "string" &&
					tasksTab &&
					tasksTab.map((t) => <TaskCard key={t.id} task={t} />)}
			</div>
		</div>
	);
};

export default TaskList;
