import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { ListsView } from '..'
import { FETCH_TODOS } from 'Redux/reducers/todos'
import { FETCH_COMMENTS } from 'Redux/reducers/comments'

export default function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: FETCH_TODOS })
        dispatch({ type: FETCH_COMMENTS })
    }, [])

    return (
        <div className="container px-2">
            <header><h2 className='pb-4 text-center text-muted'>MainPage</h2></header>
            <ListsView />
        </div >
    )
}
