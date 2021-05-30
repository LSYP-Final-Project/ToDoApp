import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistoryRouter } from 'Core/hooks/useHistoryRouter'
import { getTaskComments } from "Redux/reducers/comments";
import { getOneTodo } from "Redux/reducers/todos";
import CommentsCard from "./CommentsCard";

const Container = styled.div`
	max-width: 768px;
`;

const DetailsTask = () => {
	const { goBack } = useHistoryRouter();
	const task = useSelector(getOneTodo);
	const date = new Date(task?.createdAt);


	const comments = useSelector(getTaskComments);
	console.log(comments);

	if (!task) return

	return (
		<Container className="container mt-3">
			<p className="display-6">Details:</p>
			<div className="row">
				<div className="col-sm mb-4">
					<h5>{task.title}</h5>
					<h6>{task.description}</h6>
					<h6>Created by: {task.userId}</h6>
					<h6>Created at: {date.toLocaleDateString()}</h6>
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
		</Container>
	);
};

export default DetailsTask;
