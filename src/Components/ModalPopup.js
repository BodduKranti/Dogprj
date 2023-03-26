import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalPopup = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <img 
                        src={props.selImg} 
                        className="img-fluid"
                        alt={props.selImg}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalPopup