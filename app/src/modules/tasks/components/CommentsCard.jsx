import React from "react";
import {convertMsToLocalDate} from 'Core/helpers/functions/timeAndDate';

const CommentsCard = ({ comment }) => {
   // const date = new Date(comment.createdAt);

	return (
		<div className="list-group-item ">
			{comment.content} <span className="fst-italic text-secondary"> - wrote by {comment.userId} at {convertMsToLocalDate(comment.createdAt)}</span>
		</div>
	);
};

export default CommentsCard;
