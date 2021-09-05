import ApplicationCard from './ApplicationCard';
import applications from '../applicationData.json';
import { Button, Col } from 'react-bootstrap';

//TODO - add function to 'add new' button

const Column = ({ name }) => {
    return (
        <Col className='mx-1 align-content-center'>
            <h2>{name}</h2>
            {
                applications.map(data => (
                    <ApplicationCard data={data} />
                ))
            }
                <Button className='w-100'><strong>Add New</strong></Button>
        </Col>
    )
}

export default Column;