import { Form, Modal } from "react-bootstrap"

const NewColumnModal = (props) => {
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
                        <Form.Control type='text' placeholder='Enter a column name' />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default NewColumnModal;