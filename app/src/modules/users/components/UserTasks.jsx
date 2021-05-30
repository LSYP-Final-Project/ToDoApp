import React from 'react'
import { useHistory } from 'react-router'

export const UserTasks = () => {

    const { push } = useHistory()

    return (
        <div className="card mt-3">

            <div className="card-header bg-white d-flex align-items-center">
                <h4 className="me-auto">
                    User's tasks - <b>Leanne Graham</b>
                </h4>
                <button className="btn btn-sm btn-close" onClick={() => push('/users')} />
            </div>

            <div className="card-body">
                
            </div>

        </div>
    )
}