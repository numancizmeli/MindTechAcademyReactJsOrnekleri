import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const BootStrapDemo =()=>
{

    return  <Container>
    <Row>
        <Col sm> 1 of 1
        </Col>
        <Col sm> 1 of 2
        </Col>
        
    </Row>
    <Row>
        <Col> 2 of 1
        </Col>
        <Col> 2 of 2
        </Col>
        
    </Row>
    </Container>
     
}
export default BootStrapDemo