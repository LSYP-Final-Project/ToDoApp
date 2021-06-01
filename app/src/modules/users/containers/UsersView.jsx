import React, { useEffect, useCallback } from 'react'
import { UsersList } from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchUsers } from '../../../redux/actions'
import { UserDetails } from '../components/UserDetails'
import { UserTasks } from '../components/UserTasks'
import { Route, Switch, useHistory } from 'react-router'
import { getUsers, getUser } from '../../../redux/selectors'

export const UsersView = () => {

    const { push } = useHistory()
    const dispatch = useDispatch()

    const users = useSelector(getUsers)
    const selectedUser = useSelector(getUser)

    const showUserDetails = useCallback((id) => {
        dispatch(fetchUser(id))
        push('/users/details/' + id)
    }, [])

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

                        <div class="input-group mt-2 mb-3">
                            <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <UsersList users={users}
                                   showUserDetails={showUserDetails}
                                   showUserTasks={showUserTasks}
                        />
                    </div>
                    <div className="col-6">
                        <Switch>
                            {selectedUser && <Route path="/users/details/:user_id" render={() => <UserDetails user={selectedUser}/>}/>}
                            {selectedUser && <Route path="/users/tasks/:user_id" render={() => <UserTasks user={selectedUser}/>}/>}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}
