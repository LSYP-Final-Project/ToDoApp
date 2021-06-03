import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistoryRouter } from 'Core/hooks/useHistoryRouter'
import { convertMsToLocalDate } from 'Core/helpers/functions/timeAndDate'
import { getTaskComments, fetchComments } from "Redux/reducers/comments";
import { getTodo } from "Redux/reducers/todos";
import CommentsCard from "./CommentsCard";

const DetailsTask = () => {
	const { goBack } = useHistoryRouter();
	const comments = useSelector(getTaskComments);
	const task = useSelector(getTodo);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchComments());
	}, []);

	if (!task) return
	return (
		<>
			<p className="display-6">Details:</p>
			<div className="row">
				<div className="col-sm mb-4">
					<h5>{task.title}</h5>
					<h6>{task.description}</h6>
					<h6>Created by: {task.userId}</h6>
					<h6>Created at: {convertMsToLocalDate(task.createdAt)}</h6>
					<h6>Status: {task.status}</h6>
					<button onClick={goBack} className="btn btn-primary mt-4">Go back</button>
				</div>
				<div className="container col-sm">
					<div className="card">
						<div className="card-header">Comments:</div>

						<div className="list-group list-group-flush">
							{comments.map((c) => (
								<CommentsCard key={c.createdAt} comment={c} />
							))}
						</div>
						<div className="card-body text-center">
							<button className="btn btn-primary">Add Comment</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailsTask;
