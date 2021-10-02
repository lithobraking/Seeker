import { format } from "date-fns";
import { useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap"
import { v4 as uuid } from "uuid";

const EditItemModal = (props) => {
    const [itemName, setItemName] = useState('');
    const [companyName, setCompanyName] = useState('');

    const updateItem = (e) => {
        e.preventDefault();

        const column = props.columns[props.parent];
        const columnItems = [...column.items];
        const target = columnItems.find((item) => item.id === props.id);
        const updatedItem = JSON.parse(JSON.stringify(target));

        if (itemName.length > 0 && itemName !== target.position) {
            updatedItem.position = itemName;
        }

        if (companyName.length > 0 && companyName !== target.company) {
            updatedItem.company = companyName;
        }

        // add updated object back into columnItems
        if (columnItems.includes(target)) {
            columnItems[columnItems.indexOf(target)] = updatedItem;
        }

        props.setColumns({
            ...props.columns,
            [props.parent]: {
                name: column.name,
                items: columnItems
            }
        });

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
                    disabled={itemName === '' && companyName === ''}>
                    Update
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditItemModal;