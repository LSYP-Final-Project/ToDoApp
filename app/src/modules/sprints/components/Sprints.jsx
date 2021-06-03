import React from 'react'
import { getSprint } from 'Redux/reducers/sprints';
import { useSelector } from "react-redux";
import { SprintOngoingTask } from '../styled-components/index';

function Sprints() {
    const sprint = useSelector(getSprint);

    return (
        <div>
            {sprint && sprint.tasks.map((e) =>
                <div className="border-bottom border-black">
                    {/* <div className="lead my-3">{e.description} <b>{e.points}</b></div> */}
                    <SprintOngoingTask>
                        <div className="minus-sign">&minus;</div>
                        <p>{e.description}</p>
                        <div className={`points-${e.points}`}>{e.points}</div>

                    </SprintOngoingTask>
                </div>
            )}
        </div>
    )





}

export default Sprints
