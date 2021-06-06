import React, { useMemo } from 'react'
import { TaskCard, CommentCard } from 'Core/components'
import { DataList } from '..'
import { useSelector } from "react-redux";
import { getUserTasks, getLatestTasks } from "Redux/reducers/todos";
import { getLatestComments } from "Redux/reducers/comments";

export default function ListsView() {
    const userTasks = useSelector(getUserTasks);
    const latestTasks = useSelector(getLatestTasks);
    const latestComments = useSelector(getLatestComments);

    return useMemo(() => (
        <main className="d-flex flex-column flex-lg-row px-2">
            <div className="col-lg-4">
                <DataList title={'Your tasks'} data={userTasks} Card={TaskCard} />
            </div>
            <div className="my-3 my-lg-0 col-lg-4 mx-lg-3">
                <DataList title={'Latest tasks'} data={latestTasks} Card={TaskCard} />
            </div>
            <div className="col-lg-4">
                <DataList title={'Latest Comments'} data={latestComments} Card={CommentCard} />
            </div>
        </main>
    ), [userTasks, latestTasks, latestComments])
}
