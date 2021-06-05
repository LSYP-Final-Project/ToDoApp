import React from 'react'
import { StyledOngoingSprint } from '../styled-components'
import { STATUSES } from '../../../constants';
import { useDispatch } from 'react-redux';
import { selectedSprintId, updateSprintName} from 'Redux/reducers/sprints';

const SprintOngoingTab = ({ sprints }) => {
    const dispatch = useDispatch();

    const onSprintClick = (name, id) => {
        dispatch(selectedSprintId(id))
        dispatch(updateSprintName(name));
    }


    return (
        <div>
            {sprints.length && sprints.map(({ name, status, id }) =>
                status === STATUSES.ONGOING &&
                <div className='sprint-item'>
                    <StyledOngoingSprint
                        key={id}
                        onClick={() => onSprintClick(name, id)}>
                        {name}
                    </StyledOngoingSprint>
                </div>
            )}
        </div>
    )
}

export default SprintOngoingTab