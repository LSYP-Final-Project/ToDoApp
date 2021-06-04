import React, {useState} from 'react'
import { getSprint } from 'Redux/reducers/sprints';
import { useSelector } from "react-redux";
import { SprintOngoingTask } from '../styled-components/index';
import { ModalInfo } from './ModalInfo';

function Sprints() {
    const sprint = useSelector(getSprint);
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            {sprint && sprint.tasks.map((e) =>
                <div className="border-bottom border-black">
                    <SprintOngoingTask onClick={() => setModalShow(true)}>
                        <div className="minus-sign">&minus;</div>
                        <p>{e.description}</p>
                        <div className={`points-${e.points}`}>{e.points}</div>

                        
                    </SprintOngoingTask>

                    <ModalInfo
                        description={e.description}
                        points={e.points}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default Sprints

