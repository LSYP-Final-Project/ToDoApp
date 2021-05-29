import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectTaskId } from '../../redux/actions';

function convertTimeToLocalDate(time) {
	const date = new Date(time)
	return date.toLocaleDateString()
}

const TaskCard = ({ task }) => {
	const dispatch = useDispatch();

	const onTaskCardClick = () => {
		dispatch(selectTaskId(task.id));
	};

	return (
		<>
			{task &&
				<Link
					to={`/tasks/${task.id}`}
					className={`card list-group-item list-group-item-action border-dark border-top mb-2`}
					onClick={onTaskCardClick}
				>
					<div className="card-body">
						<div className="d-flex justify-content-between">
							<h5 className="card-title">{task.title}</h5>
							<time datetime="2018-07-07">{convertTimeToLocalDate(task.createdAt)}</time>
						</div>
						<h6 className="card-subtitle mb-2 text-muted">{task.userId}</h6>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</Link>
			}
		</>
	);
};

export default TaskCard;