import { Card } from "react-bootstrap"

const ApplicationCard = ({ data }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{data.position}</Card.Title>
                <Card.Subtitle>{data.company}</Card.Subtitle>
                <Card.Subtitle>Applied: {data.date}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default ApplicationCard;