import { format } from "date-fns";
import { useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap"
import { v4 as uuid } from "uuid";

const EditItemModal = (props) => {
    const [itemName, setItemName] = useState('');
    const [companyName, setCompanyName] = useState('');

    const updateItem = (e) => {
        e.preventDefault();
        console.log('hypothetical item updated!');
        // props.columns[props.parentId].items.push({
        //     id: uuid(),
        //     parent: props.parentId,
        //     position: itemName,
        //     company: companyName,
        //     status: props.columns[props.parentId].name,
        //     date: format(new Date(), 'd MMM y'),
        //     contacts: [
        //         {
        //             name: '',
        //             title: '',
        //             company: '',
        //             email: '',
        //             phone: ''
        //         }
        //     ],
        //     link: '',
        //     milestones: [
        //         {
        //             title: '',
        //             date: '',
        //             details: ''
        //         }
        //     ],
        //     offer: {
        //         date: '',
        //         basePay: 0,
        //         stock: 0,
        //         bonus: 0
        //     },
        //     notes: ''
        // })

        // props.setColumns(props.columns);

        // setItemName('');
        // setCompanyName('');
        props.onHide();
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>Update Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateItem}>
                    <Form.Group>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder={props.currentPosition}
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder={props.currentCompany}
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <ModalFooter>
                <Button
                    onClick={updateItem}
                    disabled={itemName === '' || companyName === ''}>
                    Update
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditItemModal;