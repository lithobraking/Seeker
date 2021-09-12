import { Card, Dropdown } from "react-bootstrap";


const ApplicationCard = ({ data, columns, setColumns }) => {
    const deleteSelf = () => {
        console.log('deleteSelf() clicked!');

    }

    return (
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
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item as='button' onClick={() => deleteSelf()}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Card.Subtitle>{data.company}</Card.Subtitle>
                <Card.Subtitle>Applied: {data.date}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default ApplicationCard;