import React, { useMemo } from 'react'
import { useHistory } from 'react-router'

export const UserTasks = ({user, tasks}) => {

    const { push } = useHistory()
    
    const hasTasks = tasks.length > 0

    return useMemo(() => (
        <div className="card mt-2">

            <div className="card-header bg-white d-flex align-items-center">
                <h4 className="me-auto">
                    User's tasks - <b>{user.name}</b>
                </h4>
                <button className="btn btn-sm btn-close" onClick={() => push('/users')} />
            </div>

            <div className="card-body">

                {hasTasks && tasks.map((task, index) => 
                    <p key={index}>{task.title}</p>
                )}

                {!hasTasks && <p className="fw-bold text-center">User has no assigned tasks</p> }
            </div>

        </div>
    ), [user, tasks])
}