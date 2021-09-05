import { Card } from "react-bootstrap"

const ApplicationCard = ({ data }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{data.id}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ApplicationCard;