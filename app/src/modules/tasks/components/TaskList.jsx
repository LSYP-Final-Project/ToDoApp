import React, { useEffect } from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../../redux/reducers/todos";
import { fetchTodos } from "../../../redux/reducers/todos";

const TaskList = () => {
	const dispatch = useDispatch();
	const tasksTab = useSelector(getAllTodos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

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
