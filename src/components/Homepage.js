import ApplicationCard from './ApplicationCard';
import applications from '../data.json';
import { Container, Row, Button, Col } from 'react-bootstrap';

const Homepage = () => {
    return(
        <Container className='w-100 d-flex flex-row'>
        <Col>
            {
              applications.map(data => (
                <ApplicationCard data={data} />
              ))
            }
        </Col>
        <Col>
            {
              applications.map(data => (
                <ApplicationCard data={data} />
              ))
            }
        </Col>
        <Col>
            {
              applications.map(data => (
                <ApplicationCard data={data} />
              ))
            }
        </Col>
        <Col>
            {
              applications.map(data => (
                <ApplicationCard data={data} />
              ))
            }
        </Col>
      </Container>
    )
}

export default Homepage