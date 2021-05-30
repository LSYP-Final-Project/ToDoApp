import React from 'react'
import { TaskList } from '..'
import { useSelector } from "react-redux";
import { getAllTodos, getUserTasks, getLatestTasks } from "Redux/reducers/todos";

export default function TasksView() {
    const tasks = useSelector(getAllTodos);
    const userTasks = useSelector(getUserTasks);
    const latestTasks = useSelector(getLatestTasks);

    return (
        <main className="d-flex flex-column flex-lg-row px-2">
            <div className="col-lg-4">
                <TaskList title={'Your tasks'} tasks={userTasks} />
            </div>
            <div className="my-3 my-lg-0 col-lg-4 mx-lg-3">
                <TaskList title={'Latest tasks'} tasks={latestTasks} />
            </div>
            <div className="col-lg-4">
                <TaskList title={'Latest Comments'} tasks={tasks} />
            </div>
        </main>
    )
}
