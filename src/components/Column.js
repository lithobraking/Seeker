import ApplicationCard from './ApplicationCard';
import applications from '../applicationData.json';
import { Container, Row, Button, Col } from 'react-bootstrap';



const Column = ({name}) => {
    return (
            <Col>
            <h2>{name}</h2>
                {
                    applications.map(data => (
                        <ApplicationCard data={data} />
                    ))
                }
            </Col>
    )
}

export default Column;