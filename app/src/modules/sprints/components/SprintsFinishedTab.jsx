import React from 'react'
import { StyledFinishedSprint } from '../styled-components'
import { STATUSES } from '../../../constants';
import { useDispatch } from 'react-redux';
import { selectedSprintId, updateSprintName } from 'Redux/reducers/sprints';

const StyledFinishedTab = ({ sprints }) => {
    const dispatch = useDispatch()

    const onSprintClick = (name, id) => {
        dispatch(selectedSprintId(id))
        dispatch(updateSprintName(name));
    }

    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.FINISHED &&
                <div className='sprint-item' 
                key={id}>
                    <StyledFinishedSprint
                        onClick={() => onSprintClick(name, id)}>
                        {name}
                    </StyledFinishedSprint>
                </div>
            )}
        </div>
    )
    
}

export default StyledFinishedTab