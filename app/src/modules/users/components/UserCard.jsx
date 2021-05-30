import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../redux/actions';
import { UserBadge } from '../styled-components/UserBadge';


export const UserCard = (props) => {

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
                        {getUserInitials(props.user.name)}
                    </UserBadge>
                </div>
                <div className="col-7">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.email}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {props.user.address.city}
                        </small>
                    </p>
                </div>       
                <div className="col-2">                    
                    <button className="btn btn-sm btn-outline-primary w-100"
                            onClick={() => props.showUserDetails(props.user.id)}>
                        Details
                    </button>

                    <button className="btn btn-sm btn-primary mt-3 w-100"
                            onClick={() => props.showUserTasks(props.user.id)}>
                        Tasks
                    </button>
                </div>             
            </div>
        </div>
    )
}
