import React from 'react'
import { StyledOngoingSprint } from '.'

const SprintOngoingTab = (props) => {
    return (
        <div>
            {props.sprints?.map((name, status, index) => 
                props.sprints.status === 'ONGOING' ? 
                <div className = 'ongoing-sprint' index={index}>
                    <StyledOngoingSprint name={name} /> 
                </div> : ''
            )}
        </div>
    )
}

export default SprintOngoingTab