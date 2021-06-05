import React from 'react'
import { useParams } from 'react-router';
import { UserBadge } from '../styled-components/UserBadge';


const UserCard = ({ user, showUserDetails, showUserTasks }) => {

    const getUserInitials = (name) => {

        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...name.matchAll(rgx)] || [];

        initials = (
            (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();

        return initials;
    }
    return (
        <div className="card">
            <div className="card-body row align-items-center">
                <div className="col-3">
                    <UserBadge>
                        {getUserInitials(user.name)}
                    </UserBadge>
                </div>
                <div className="col-6">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {user.address.city}
                        </small>
                    </p>
                </div>
                <div className="col-3">
                    <button className="btn btn-sm btn-outline-primary w-100"
                        onClick={() => showUserDetails(user.id)}>
                        Details
                    </button>

                    <button className="btn btn-sm btn-primary mt-3 w-100"
                        onClick={() => showUserTasks(user.id)}>
                        Tasks
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserCard