import React from 'react'
import { StyledFinishedSprint } from '../styled-components'
import { STATUSES } from '../../../constants';
import { useDispatch } from 'react-redux';
import { selectedSprintId } from 'Redux/reducers/sprints';

const StyledFinishedTab = ({ sprints }) => {
    const dispatch = useDispatch()

    const onSprintClick = (name, id) => {
        document.querySelector('.task-title').innerText = name
        dispatch(selectedSprintId(id))
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