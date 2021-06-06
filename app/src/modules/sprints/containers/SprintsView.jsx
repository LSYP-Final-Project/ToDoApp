import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sprints, StyledAddButton, StyledFinishedContainer, StyledOngoingContainer, Backlog } from '../styled-components/index';
import { fetchSprints } from 'Redux/actions';
import { getAllSprints, getSprintName, selectedSprintId} from 'Redux/reducers/sprints';
import SprintOngoingTab from '../components/SprintOngoingTab';
import SprintFinishedTab from '../components/SprintsFinishedTab';
import { Link } from "react-router-dom";


function SprintsView(props) {
    const dispatch = useDispatch()
    const sprints = useSelector(getAllSprints)
    const sprintName = useSelector(getSprintName);

    useEffect(() => {
        dispatch(fetchSprints())
    }, [])

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <StyledAddButton>
                            <Link to='/addsprint'>
                                <div className="plusSignWrapper">
                                    <div className='plusSign'></div>
                                </div>
                                <p>Add Sprint</p>
                            </Link>
                        </StyledAddButton>
                    </div>
                    <div className="col-5 text-center"><h1 className='text-secondary sprint-title'>{sprintName}</h1></div>
                    <div className="col-1"></div>
                    <div className="col-4 text-center"><h1 className='text-secondary'>BACKLOG</h1></div>
                </div>

                <div className="row mt-2">
                    <div className="col-2">
                        <StyledOngoingContainer>
                            <p>ongoing</p>
                            <SprintOngoingTab sprints={sprints} />

                        </StyledOngoingContainer>

                        <StyledFinishedContainer>
                            <p>finished</p>
                            <SprintFinishedTab sprints={sprints} />

                        </StyledFinishedContainer>

                    </div>
                    <div className="col-5 border border-darken-1 m-0 p-0">
                        <Sprints />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 border border-darken-1 m-0 p-0">
                        <Backlog />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SprintsView
