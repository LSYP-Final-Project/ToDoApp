import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistoryRouter } from "Core/hooks/useHistoryRouter";
import { convertMsToLocalDate } from "Core/helpers/functions/timeAndDate";
import { getTaskComments, fetchComments, addComment } from "Redux/reducers/comments";
import { getTodo } from "Redux/reducers/todos";
import CommentsCard from "./CommentsCard";
import { CommentsService } from "Services";

const DetailsTask = () => {
	const [addingComment, setAddingComment] = useState(false);
	const [newTaskTitle, setNewTaskTitle] = useState("");
	const dispatch = useDispatch();
	const { goBack } = useHistoryRouter();
	const comments = useSelector(getTaskComments);
	const task = useSelector(getTodo);

	const addNewComment = () => {
		const date = new Date().getTime();

		const comment = {
			id: date,
			userId: task.userId,
			taskId: task.id,
			content: newTaskTitle,
			createdAt: date,
		};

		dispatch(addComment(comment));
		CommentsService.postComment(comment);

		setAddingComment(false);
		setNewTaskTitle("");
	};

	useEffect(() => {
		dispatch(fetchComments());
	});

	if (!task) return;
	return (
		<div className="container mt-3">
			<p className="display-6">Details:</p>
			<div className="row">
				<div className="col-sm mb-4">
					<h5>{task.title}</h5>
					<h6>{task.description}</h6>
					<h6>Created by: {task.userId}</h6>
					<h6>Created at: {convertMsToLocalDate(task.createdAt)}</h6>
					<h6>Status: {task.status}</h6>
					<button onClick={goBack} className="btn btn-primary mt-4">
						Go back
					</button>
				</div>
				<div className="container col-sm">
					<div className="card mb-3">
						<div className="card-header">Comments:</div>

						<div className="list-group list-group-flush">
							{comments.map((c) => (
								<CommentsCard key={c.createdAt} comment={c} />
							))}
						</div>
						<div className="card-body text-center">
							<button className="btn btn-primary" onClick={() => setAddingComment(true)}>
								Add Comment
							</button>
						</div>
						{addingComment && (
							<div className="input-group mb-3 p-3">
								<input
									type="text"
									className="form-control"
									placeholder="Add your opinion..."
									value={newTaskTitle}
									onChange={(e) => setNewTaskTitle(e.target.value)}
								/>
								<div className="input-group-append">
									<button className="btn btn-primary" type="button" onClick={addNewComment}>
										Add
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsTask;
