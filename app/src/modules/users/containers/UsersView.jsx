import React, { useEffect, useState, useCallback } from 'react'
import { UsersList } from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUser } from '../../../redux/actions'
import UserDetails from '../components/UserDetails'
import { Route, Switch, useParams } from 'react-router'

export const UsersView = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const { user_id } = useParams()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2>Users</h2>
                    <div className="col-6">
                        <UsersList users={users} />
                    </div>
                    <div className="col-6">
                        <Switch>
                            <Route path="/users/:user_id/details" render={() => <UserDetails />}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}