import React from "react";
import { Link, NavLink } from 'react-router-dom';

const TaskCard = ({task, setSelectedTaskId}) => {

	const onTaskCardClick = (e) => {
		e.preventDefault();
      setSelectedTaskId(task.id);
	};

	return (
		<div
			className={`list-group-item list-group-item-action`}
			onClick={onTaskCardClick}
		>
         <Link to={`/tasks/${task.id}`}>
			{task.title} (created by {task.userId}) - <span className="fst-italic">{task.status}</span>
         </Link>
		</div>
	);
};

export default TaskCard;
