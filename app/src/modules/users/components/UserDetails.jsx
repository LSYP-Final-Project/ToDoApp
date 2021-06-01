import React from 'react'
import { useHistory } from 'react-router'

export const UserDetails = (props) => {

    const { push } = useHistory()

    return (
        <div className="card mt-2">

            <div className="card-header bg-white d-flex align-items-center">
                <h4 className="me-auto">
                    User's details - <b>{props.user.name}</b>
                </h4>
                <button className="btn btn-sm btn-close" onClick={() => push('/users')} />
            </div>

            <div className="card-body">
                <dl>
                    <dt>Username:</dt>
                    <dd aria-label="User Name">{props.user.username}</dd>

                    <dt>Phone number:</dt>
                    <dd aria-label="User phone number">{props.user.phone}</dd>

                    <dt>Website:</dt>
                    <dd aria-label="User website">{props.user.website}</dd>

                    <dt>Company:</dt>
                    <dd aria-label="User company">{props.user.company?.name}</dd>
                </dl>
            </div>

        </div>
    )
}