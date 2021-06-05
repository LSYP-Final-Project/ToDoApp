import React from 'react'
import { StyledFinishedSprint } from '../styled-components'
import { STATUSES } from '../../../constants';
import { useDispatch } from 'react-redux';
import { selectedSprintId, selectedSprintName } from 'Redux/reducers/sprints';

const StyledFinishedTab = ({ sprints }) => {
    const dispatch = useDispatch()

    const onSprintClick = (name, id) => {
        dispatch(selectedSprintId(id))
        console.log(dispatch(selectedSprintName(name)))
        dispatch(selectedSprintName(name))
    }

    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.FINISHED &&
                <div className='sprint-item'>
                    <StyledFinishedSprint
                        key={id}
                        onClick={() => onSprintClick(name, id)}>
                        {name}
                    </StyledFinishedSprint>
                </div>
            )}
        </div>
    )
    
}

export default StyledFinishedTab