import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBacklog } from 'Redux/reducers/sprints'
import { SprintOngoingTask } from '../styled-components/index';
import { ModalInfo } from './ModalInfo';


function Backlog() {
    const dispatch = useDispatch();
    const backlog = useSelector(getBacklog);

    const [modalShow, setModalShow] = useState(false);
    
    const [modalInfo, setModalInfo] = useState({
        description: 'no description provided',
        points: 0
    });


    return (
        <div>
            {backlog && backlog.tasks.map((backlog) => 
                <div className="border-bottom border-black">
                    <SprintOngoingTask key={Math.random().toString(36).substring(7)}>
                        <p onClick={() => {
                            setModalShow(true)
                            setModalInfo({
                                description: backlog.description, 
                                points: backlog.points
                            })
                            }}>
                            {backlog.description}
                        </p>

                        <div className={`points-${backlog.points}`}>
                            {backlog.points}
                        </div>
                    </SprintOngoingTask>

                    <ModalInfo
                            description={modalInfo.description}
                            points={modalInfo.points}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default Backlog
