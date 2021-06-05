import React, {useState} from 'react'
import { getSprint } from 'Redux/reducers/sprints';
import { useSelector } from "react-redux";
import { SprintOngoingTask } from '../styled-components/index';
import { ModalInfo } from './ModalInfo';

function Sprints() {
    const sprint = useSelector(getSprint);
    const [modalShow, setModalShow] = useState(false);
    
    const [modalInfo, setModalInfo] = useState({
        description: 'no description provided',
        points: 0
    });

    return (
        <div>
            {sprint && sprint.tasks.map((sprint) =>
                <div className="border-bottom border-black">
                    <SprintOngoingTask >
                        <div className="minus-sign">&minus;</div>
                        <p onClick={() => {
                            setModalShow(true)
                            setModalInfo({description: sprint.description, points: sprint.points})
                            }}>
                                {sprint.description}
                            </p>
                        <div className={`points-${sprint.points}`} key={sprint.id}>{sprint.points}</div>

                        <ModalInfo
                            description={modalInfo.description}
                            points={modalInfo.points}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </SprintOngoingTask>
                </div>
            )}

        </div>
    )
}

export default Sprints

