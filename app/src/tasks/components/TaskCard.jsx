import React from "react";


const TaskCard = ({ userId, id, title, completed }) => {
	const onTaskCardClick = (e) => {
		e.preventDefault();

		const data = {
			userId,
			id,
			title,
			completed,
		};
      console.log(data);
	};

	return (
		<div
			className={`list-group-item list-group-item-action ${completed ? "active" : ""}`}
			onClick={onTaskCardClick}
		>
			{title} (created by {userId}) - <span class="fst-italic">{completed ? 'Finished' : 'Not finished'}</span>
		</div>
	);
};

export default TaskCard;
