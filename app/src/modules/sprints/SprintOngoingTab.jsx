import React from 'react'
import { StyledOngoingSprint } from '.'
import { STATUSES } from '../../constants';

const SprintOngoingTab = ({ sprints }) => {
    
    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.ONGOING &&
                <div className='ongoing-sprint'>
                    <StyledOngoingSprint key={id}>{name}</StyledOngoingSprint>
                </div>
            )}
        </div>
    )
}

export default SprintOngoingTab