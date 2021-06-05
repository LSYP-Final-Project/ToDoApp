import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "Redux/reducers/todos";
import { FETCH_TODOS } from 'Redux/reducers/todos'
import TaskList from "../components/TaskList";
import SearchTasks from "../components/SearchTasks";

const TaskView = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTodos);

	useEffect(() => {
		dispatch({ type: FETCH_TODOS })
	}, [])

	return (
		<div className="container mt-3">
			<p className="display-6">Hi! You will find your tasks below:</p>
			<SearchTasks />
			<TaskList tasks={tasks} />
		</div>
	);
};

export default TaskView;
