import { format } from "date-fns";
import { useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap"
import { v4 as uuid } from "uuid";

const NewItemModal = (props) => {
    const [itemName, setItemName] = useState('');
    const [companyName, setCompanyName] = useState('');

    const createNewItem = (e) => {
        e.preventDefault();

        props.columns[props.parentId].items.push({
            id: uuid(),
            position: itemName,
            company: companyName,
            status: props.columns.name,
            date: format(new Date(), 'd MMM y'),
            contacts: [
                {
                    name: '',
                    title: '',
                    company: '',
                    email: '',
                    phone: ''
                }
            ],
            link: '',
            milestones: [
                {
                    title: '',
                    date: '',
                    details: ''
                }
            ],
            offer: {
                date: '',
                basePay: 0,
                stock: 0,
                bonus: 0
            },
            notes: "any additional notes or thoughts"
        })

        props.setColumns(props.columns);

        setItemName('');
        setCompanyName('');
        props.onHide();
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>Add Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={createNewItem}>
                    <Form.Group>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter job title'
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter company name'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <ModalFooter>
                <Button
                    onClick={createNewItem}
                    disabled={itemName === ''}>
                    Add Item
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default NewItemModal;