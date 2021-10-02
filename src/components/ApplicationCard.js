import { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import EditItemModal from "./EditItemModal";


const ApplicationCard = ({ data, columns, setColumns }) => {
    const [editModalShow, setEditModalShow] = useState(false);

    const handleDelete = () => {
        const column = columns[data.parent];
        const columnItems = [...column.items];

        const newItems = columnItems.filter((item) => item.id !== data.id);

        setColumns({
            ...columns,
            [data.parent]: {
                name: column.name,
                items: newItems
            }
        })
    }

    const handleEdit = () => {
        console.log("item ID being edited: ", data.id);
        setEditModalShow(true);
    }

    return (
        <>
        <Card >
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title>{data.position}</Card.Title>
                    <Dropdown style={{ cursor: 'pointer' }}>
                        <Dropdown.Toggle as='div' id='three-dot-dropdown'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as='button' onClick={() => handleEdit()}>Edit</Dropdown.Item>
                            <Dropdown.Item as='button' onClick={() => handleDelete()}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Card.Subtitle>{data.company}</Card.Subtitle>
                <Card.Subtitle>Applied: {data.date}</Card.Subtitle>
            </Card.Body>
        </Card>
        <EditItemModal 
            parent={data.parent}
            id={data.id}
            currentPosition={data.position}
            currentCompany={data.company}
            show={editModalShow}
            onHide={() => setEditModalShow(false)}
            columns={columns}
            setColumns={setColumns}
        />
        </>
    );
}

export default ApplicationCard;