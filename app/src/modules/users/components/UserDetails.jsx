import React, { useMemo } from 'react'
import { useHistory } from 'react-router'

const UserDetails = ({ user }) => {

    const { push } = useHistory()

    return useMemo(() => (
        <div className="card mt-2">

            <div className="card-header bg-white d-flex align-items-center">
                <h4 className="me-auto">
                    User's details - <b>{user.name}</b>
                </h4>
                <button className="btn btn-sm btn-close" onClick={() => push('/users')} />
            </div>

            <div className="card-body">
                <dl>
                    <dt>Username:</dt>
                    <dd aria-label="Username">{user.username}</dd>

                    <dt>Phone number:</dt>
                    <dd aria-label="User phone number">{user.phone}</dd>

                    <dt>Website:</dt>
                    <dd aria-label="User website">{user.website}</dd>

                    <dt>Company:</dt>
                    <dd aria-label="User company">{user.company?.name}</dd>
                </dl>
            </div>

        </div>
    ), [user])
}
export default UserDetails