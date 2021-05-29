import React, { useEffect } from 'react'
import { UsersList } from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../redux/actions'

export const UsersView = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <UsersList users={users} />
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}