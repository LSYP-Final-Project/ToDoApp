import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectTaskId } from "Redux/reducers/todos";
import styled from "styled-components";

const SpanStyle = styled.span`
	font-style: italic;
`;

const TaskCard = ({ task }) => {
	const dispatch = useDispatch();

	const onTaskCardClick = useCallback(() => {
		dispatch(selectTaskId(task.id));
	}, []);

	return (
		<Link
			to={`/tasks/${task.id}`}
			className={`list-group-item list-group-item-action`}
			onClick={onTaskCardClick}
		>
			{task.title} (created by {task.userId}) -{" "}
			<SpanStyle className="fst-italic">{task.status}</SpanStyle>
		</Link>
	);
};

export default TaskCard;
