import React, { useEffect } from 'react'
import { getSprint } from '../../redux/reducers/sprints';
import { useDispatch, useSelector } from "react-redux";
import { selectedSprintId } from '../../redux/reducers/sprints';

function Sprints( tasks ) {
    const sprint = useSelector(getSprint);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(selectedSprintId())
	}, [sprint]);    
        

    return (
        <div>
            
        </div>
    )





}

export default Sprints
