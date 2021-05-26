import React, { useState } from "react";
import TaskCard from "./TaskCard";
import DetailsTask from "./DetailsTask";

const comments = [
	{ id: 1, userId: 2, taskId: 1, content: "Good job!", createdAt: 1621853932 },
	{ id: 1, userId: 2, taskId: 1, content: "Easy job!", createdAt: 1621853954 },
	{ id: 1, userId: 2, taskId: 1, content: "Be careful", createdAt: 1621853953 },
	{ id: 2, userId: 1, taskId: 2, content: "Bad job.", createdAt: 1621853964 },
	{ id: 2, userId: 1, taskId: 2, content: "Great!", createdAt: 1621853912 },
	{ id: 2, userId: 1, taskId: 2, content: "Error on MainPage!", createdAt: 1621853951 },
	{ id: 3, userId: 3, taskId: 3, content: "Nothing special...", createdAt: 1621853942 },
	{ id: 3, userId: 3, taskId: 3, content: "That was so  good...", createdAt: 1621853954 },
	{ id: 3, userId: 3, taskId: 3, content: "Um....", createdAt: 1621853955 },
];

const tasks = [
	{
		sprintId: 1,
		description: "Description Lorem ipsum dolor sit amet.",
		userId: 1,
		id: 1,
		title: "Zrobić Karpatkę",
		status: "inprogress",
		createdAt: 1621508357,
	},
	{
		sprintId: 1,
		description: "Description Lorem ipsum dolor sit amet.",
		userId: 1,
		id: 2,
		title: "Zostać mistrzem Reacta",
		status: "done",
		createdAt: 1621858957,
	},
	{
		sprintId: 1,
		description: "Description Lorem ipsum dolor sit amet.",
		userId: 1,
		id: 3,
		title: "Zrobić naleśniki z musem truskawkowym",
		status: "todo",
		createdAt: 1621940377,
	},
];

const TaskList = () => {
	const [selectedTaskId, setSelectedTaskId] = useState(null);
	console.log(selectedTaskId);

	return (
		<div className="row">
			<div className="list-group col-6">
				{tasks.map((t) => (
					<TaskCard key={t.id} task={t} setSelectedTaskId={setSelectedTaskId} />
				))}
			</div>

		</div>
	);
};

export default TaskList;
