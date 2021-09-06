import { useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap"
import { v4 as uuid } from "uuid";
// import { mockColumns as columns} from '../mockData';


const NewColumnModal = (props) => {
    const [columnName, setColumnName] = useState('');

    const createNewColumn = (e) => {
        e.preventDefault()

        props.columns[uuid()] = {
            name: columnName,
            items: []
        }
        props.setColumns(props.columns);
        setColumnName('')
        props.onHide()
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>Add Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={createNewColumn}>
                    <Form.Group>
                        <Form.Label>Column Name</Form.Label>
                        <Form.Control
                            required
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
                    onClick={createNewColumn}
                    disabled={columnName === ''}>
                        Create
                    </Button>
            </ModalFooter>
        </Modal>
    );
}

export default NewColumnModal;