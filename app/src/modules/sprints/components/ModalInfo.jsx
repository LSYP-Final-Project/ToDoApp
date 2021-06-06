import React from 'react'
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';

export const ModalInfo = (props) => {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        Task description
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row m-1">
            <div className="col-10 lead mb-4">{props.description}</div>
            <div className={`points-${props.points} col-2 display-4 text-center`}>{props.points}</div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Okay</Button>
        </Modal.Footer>
    </Modal>
    );
}
