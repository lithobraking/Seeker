import { Card } from "react-bootstrap"

const ApplicationCard = ({ data }) => {
    return (
        <Card className='m-1'>
            <Card.Body>
                <Card.Title>{data.position}</Card.Title>
                <Card.Subtitle>{data.company}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default ApplicationCard;