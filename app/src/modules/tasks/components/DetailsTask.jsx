import React from "react";
import CommentsCard from "./CommentsCard";
import { getTodo } from "../../../redux/reducers/todos";
import { useSelector } from "react-redux";
import { getTaskComments } from "../../../redux/reducers/comments";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	max-width: 768px;
`;

const DetailsTask = () => {
	const task = useSelector(getTodo);
	const date = new Date(task.createdAt);


	const comments = useSelector(getTaskComments);
	console.log(comments);

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
					<Link to="/tasks/" ><button className="btn btn-primary mt-4">Go back</button></Link>
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
