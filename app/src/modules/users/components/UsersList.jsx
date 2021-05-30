import React from 'react'
import {UserCard} from './UserCard'


export const UsersList = (props) => {

    return (
        <div>
            <div className="row row-cols-sm-1 mt-3">
                {props.users.items.map((user, index) =>
                    <div className="col mb-4" key={index}>
                        <UserCard user={user}
                                  showUserDetails={props.showUserDetails}
                                  showUserTasks={props.showUserTasks}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}