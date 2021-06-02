import React, { useEffect } from 'react'
import { getSprint } from '../../redux/reducers/sprints';
import { useDispatch, useSelector } from "react-redux";
import { selectedSprintId } from '../../redux/reducers/sprints';

function Sprints() {
    const sprint = useSelector(getSprint);

    return (
        <div>
        {sprint && sprint.tasks.map((e) =>
            <div className="border-bottom border-black">
                <div className="lead my-3">{e.description} <b>{e.points}</b></div>
            </div>
        )}
                
{/* 

            <p>{sprint && sprint.tasks[0].description} {sprint && sprint.tasks[0].points}</p>
            <p>{sprint && sprint.tasks[1].description} {sprint && sprint.tasks[1].points}</p>
            <p>{sprint && sprint.tasks[2].description} {sprint && sprint.tasks[2].points}</p> */}
        </div>
    )





}

export default Sprints
