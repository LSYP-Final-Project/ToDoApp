import React from 'react'
import {UserCard} from './UserCard'


export const UsersList = (props) => {

    return (
        <div>
            <h2>Users</h2>
            <div className="row row-cols-sm-1 mt-3">
                {props.users.map((user, index) =>
                    <div className="col mb-4" key={index}>
                        <UserCard user={user} />
                    </div>
                )}
            </div>
        </div>
    )
}