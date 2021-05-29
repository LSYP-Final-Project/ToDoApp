import React from 'react'
import { TaskList } from '..'
import { useSelector } from "react-redux";
import { getAllTodos } from "../../../redux/reducers/todos";

export default function TasksView() {
    const tasks = useSelector(getAllTodos);

    return (
        <main className="d-flex flex-column flex-lg-row px-2">
            <TaskList title={'Your tasks'} tasks={tasks} />
            <div className="my-3 my-lg-0 mx-lg-3">
                <TaskList title={'Latest tasks'} tasks={tasks} />
            </div>
            <TaskList title={'Latest Comments'} tasks={tasks} />
        </main>
    )
}
