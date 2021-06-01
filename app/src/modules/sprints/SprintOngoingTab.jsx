import React, { useState } from 'react'
import { StyledOngoingSprint } from '.'
import { STATUSES } from '../../constants';


const SprintOngoingTab = ({ sprints }) => {
    
    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.ONGOING &&
                <div className='sprint-item'>
                    <StyledOngoingSprint key={id} onClick={() => {
                        document.querySelector('.task-title').innerHTML = name
                    }}>{name}</StyledOngoingSprint>
                </div>
            )}
        </div>
    )
}

export default SprintOngoingTab