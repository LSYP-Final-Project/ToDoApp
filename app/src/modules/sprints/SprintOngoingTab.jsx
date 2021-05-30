import React from 'react'
import { StyledOngoingSprint } from '.'
import { STATUSES } from '../../constants';

const SprintOngoingTab = (props) => {
    return (
        <div>
            {props.sprints?.map(({name, status, id}) => 
                status === STATUSES.ONGOING && 
                <div className = 'ongoing-sprint' key={id}>
                    <StyledOngoingSprint name={name}/>
                </div>
            )}
        </div>
    )
}

export default SprintOngoingTab