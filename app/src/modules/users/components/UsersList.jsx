import React from 'react'
import { UserCard } from './'


const UsersList = ({ users, showUserDetails, showUserTasks }) => {
    return (
        <div>
            <div className="row row-cols-sm-1 mt-3 users-list">
                {users.map((user, index) =>
                    <div className="col mb-4" key={index}>
                        <UserCard user={user}
                            showUserDetails={showUserDetails}
                            showUserTasks={showUserTasks}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default UsersList