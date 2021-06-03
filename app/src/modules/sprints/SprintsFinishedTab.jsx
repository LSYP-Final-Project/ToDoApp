import React from 'react'
import { StyledFinishedSprint } from '.'
import { STATUSES } from '../../constants';

const StyledFinishedTab = ({ sprints }) => {
    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.FINISHED &&
                <div className='finished-sprint'>
                    <StyledFinishedSprint key={id}>{name}</StyledFinishedSprint>
                </div>
            )}
        </div>
    )
}

export default StyledFinishedTab