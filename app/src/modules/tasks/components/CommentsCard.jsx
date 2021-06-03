import React from "react";

const CommentsCard = ({ comment }) => {
   const date = new Date(comment.createdAt);

	return (
		<div className="list-group-item ">
			{comment.content} <span className="fst-italic text-secondary"> - wrote by {comment.userId} at {date.toLocaleDateString()}</span>
		</div>
	);
};

export default CommentsCard;
