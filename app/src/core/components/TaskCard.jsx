import React from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectTaskId } from 'Redux/actions'
import { convertMsToLocalDate } from 'Core/helpers/functions/timeAndDate'


const TaskCard = ({ data: { id, userId, title, description, createdAt, } }) => {
	const dispatch = useDispatch()

	const onTaskCardClick = () => {
		dispatch(selectTaskId(id))
	};

	return (
		<>
			{id &&
				<Link
					to={`/tasks/${id}`}
					className={`card list-group-item list-group-item-action border-dark border-top mb-2`}
					onClick={onTaskCardClick}
				>
					<div className="card-body">
						<div className="d-flex justify-content-between">
							<h5 className="card-title">{title}</h5>
							{createdAt && <time dateTime="2018-07-07">{convertMsToLocalDate(createdAt)}</time>}
						</div>
						<h6 className="card-subtitle mb-2 text-muted">{userId}</h6>
						<p className="card-text">{description}</p>
					</div>
				</Link>
			}
		</>
	);
};

export default TaskCard;