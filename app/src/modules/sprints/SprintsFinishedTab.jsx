import React, { useState } from 'react'
import { StyledFinishedSprint } from '.'
import { STATUSES } from '../../constants';


const StyledFinishedTab = ({ sprints }) => {

    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.FINISHED &&
                <div className='sprint-item'>
                    <StyledFinishedSprint key={id} onClick={() => {
                        document.querySelector('.task-title').innerHTML = name
                    }}>{name}</StyledFinishedSprint>
                </div>
            )}
        </div>
    )
}

export default StyledFinishedTab