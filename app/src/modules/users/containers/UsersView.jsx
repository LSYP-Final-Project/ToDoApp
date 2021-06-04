import React, { useEffect, useCallback } from 'react'
import { UsersList } from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchUsers, fetchUserTodos } from '../../../Redux/actions'
import { UserDetails } from '../components/UserDetails'
import { UserTasks } from '../components/UserTasks'
import { Route, Switch, useHistory, useParams } from 'react-router'
import { getUsers, getSelectedUser, getUserTodos } from '../../../Redux/selectors'
import SearchBar from '../../../Core/components/SearchBar'

export const UsersView = () => {
    // router
    const { replace, push } = useHistory()
    const { user_id } = useParams()
    
    // store
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const selectedUser = (useSelector(getSelectedUser))
    const userTasks = useSelector(getUserTodos)

    // functions
    const showUserDetails = (id) => {
        replace('/users/' + id + '/details')
    }
    
    const showUserTasks = (id) => {
        replace('/users/' + id + '/tasks')
    }
    
    const search = useCallback((query) => {
        push('/users')
        dispatch(fetchUsers(query))
    }, [])
    
    useEffect(() => {
        if (!user_id) { return }
        
        dispatch(fetchUser(user_id))
        dispatch(fetchUserTodos(user_id))
    }, [user_id])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div className="container users-view">
                <div className="row">
                    <h2>Users</h2>
                    <div className="col-6 overflow-auto">

                        <SearchBar onSearch={search} />

                        <UsersList users={users}
                                   showUserDetails={showUserDetails}
                                   showUserTasks={showUserTasks}
                        />
                    </div>
                    <div className="col-6">
                        <Switch>
                            {selectedUser && <Route path="/users/:user_id/details" render={() => <UserDetails user={selectedUser}/>}/>}
                            {selectedUser && <Route path="/users/:user_id/tasks" render={() => <UserTasks user={selectedUser} tasks={userTasks}/>}/>}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}
