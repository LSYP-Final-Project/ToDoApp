import React, { useMemo } from 'react'
import { useHistory } from 'react-router'
import { convertMsToLocalDate } from 'Core/helpers/functions/timeAndDate'

const UserTasks = ({ user, tasks }) => {
    const { push } = useHistory()

    const hasTasks = !!tasks.length

    return useMemo(() => (
        <div className="card mt-2">

            <div className="card-header bg-white d-flex align-items-center">
                <h4 className="me-auto">
                    User's tasks - <b>{user.name}</b>
                </h4>
                <button className="btn btn-sm btn-close" onClick={() => push('/users')} />
            </div>

            <div className="card-body">
                {hasTasks && tasks?.map((task, index) =>
                    <div className="card mb-3" key={index} aria-label="Task card">
                        <div className="card-body row">
                            <div className="col-6">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                            </div>
                            <div className="col-6 text-end">
                                <p className="card-title">{convertMsToLocalDate(task.createdAt)}</p>
                            </div>
                        </div>
                    </div>
                )}

                {!hasTasks && <p className="fw-bold text-center">User has no assigned tasks</p>}
            </div>

        </div>
    ), [user, tasks])
}
export default UserTasks