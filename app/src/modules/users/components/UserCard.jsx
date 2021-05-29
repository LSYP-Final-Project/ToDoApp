import React from 'react'
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
            <div className="card-body row">
                <div className="col-3">
                    <UserBadge>
                        {getUserInitials(props.user.name)}
                    </UserBadge>
                </div>
                <div className="col-9">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.email}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {props.user.city}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )
}
