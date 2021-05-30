import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectTaskId } from 'Redux/actions';

const TaskCard = ({ task }) => {
	const dispatch = useDispatch();

	const onTaskCardClick = () => {
		dispatch(selectTaskId(task.id));
	};

	return (
		<Link to={`/tasks/${task.id}`}
			className={`list-group-item list-group-item-action`}
			onClick={onTaskCardClick}
		>
			{task.title} (created by {task.userId}) - <span className="fst-italic">{task.status}</span>

		</Link>
	);
};

export default TaskCard;
