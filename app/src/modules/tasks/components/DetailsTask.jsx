import React from "react";
import CommentsCard from "./CommentsCard";
import { useParams } from "react-router";


const DetailsTask = (task) => {
   const { task_id } = useParams();
	const date = new Date(task.createdAt);

	return (
		<div>
			<h4>Details:</h4>
			{/* <h5>{task.title}</h5>
			<h6>{task.description}</h6>
			<h6>Created by: {task.userId}</h6>
			<h6>Created at: {date.toLocaleDateString()}</h6>
			<h6>Status: {task.status}</h6>
			<div className="card">
				<div className="card-header">Comments:</div>

				<div className="list-group list-group-flush">
					{commentsTab.map((c) => (
						<CommentsCard key={c.createdAt} comment={c} />
					))}
				</div>
				<div className="card-body text-center">
					<button className="btn btn-primary">Add Comment</button>
				</div>
			</div> */}
		</div>
	);
};

export default DetailsTask;
