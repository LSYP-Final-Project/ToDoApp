import React, { useEffect, useState, useCallback } from 'react'
import { UsersList } from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchUsers, selectUser } from '../../../redux/actions'
import { UserDetails } from '../components/UserDetails'
import { UserTasks } from '../components/UserTasks'
import { Route, Switch, useHistory, useParams } from 'react-router'

export const UsersView = () => {

    const { push } = useHistory()
    const dispatch = useDispatch()

    const users = useSelector((state) => state.users)
    const selectedUser = useSelector((state) => state.users.selectedUser)
     
    const showUserDetails = useCallback((id) => {
        dispatch(fetchUser(id))
        push('/users/details/' + id)
    }, [selectedUser])

    const showUserTasks = useCallback((id) => {
        dispatch(fetchUser(id))
        push('/users/tasks/' + id)
    }, [])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row vh-100">
                    <h2>Users</h2>
                    <div className="col-6 overflow-auto">
                        <UsersList users={users}
                                   showUserDetails={showUserDetails}
                                   showUserTasks={showUserTasks}
                        />
                    </div>
                    <div className="col-6">
                        <Switch>
                            <Route path="/users/details/:user_id" render={() => <UserDetails user={selectedUser}/>}/>
                            <Route path="/users/tasks/:user_id" render={() => <UserTasks />}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}