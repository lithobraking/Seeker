import { useEffect, useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap"



const NewColumnModal = (props) => {
    const [columnName, setColumnName] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(columnName);
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Add Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Column Name</Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder='Enter a column name'
                        value={columnName}
                        onChange={(e) => setColumnName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <ModalFooter>
                <Button 
                onClick={handleSubmit}>Create</Button>
            </ModalFooter>
        </Modal>
    );
}

export default NewColumnModal;