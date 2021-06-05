import React, {useState} from 'react'
import { getSprint, getTaskDescription } from 'Redux/reducers/sprints';
import { useDispatch, useSelector } from "react-redux";
import { SprintOngoingTask } from '../styled-components/index';
import { ModalInfo } from './ModalInfo';

function Sprints() {
    const sprint = useSelector(getSprint);
    const [modalShow, setModalShow] = useState(false);
    
    const [modalInfo, setModalInfo] = useState({
        description: 'no description provided',
        points: 0
    });
 
    const fetchTaskInfo = (task_id) => {
        setModalShow(true)
        // przekazać task_id do funkcji, która findem znajdzie konkretny opis.
    }

    return (
        <div>
            {sprint && sprint.tasks.map((sprint) =>
                <div className="border-bottom border-black">
                    <SprintOngoingTask >
                        <div className="minus-sign">&minus;</div>
                        <p onClick={() => {
                            fetchTaskInfo(sprint.id)
                            setModalInfo({description: sprint.description, points: sprint.points})
                            }}>
                                {sprint.description}
                            </p>
                        <div className={`points-${sprint.points}`}>{sprint.points}</div>

                        <ModalInfo
                            description={modalInfo.description}
                            points={modalInfo.points}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </SprintOngoingTask>
                </div>
            )}

                        {/* <ModalInfo
                            description={chosenTask.description}
                            points={chosenTask.points}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />   */}

        </div>
    )
}

export default Sprints

