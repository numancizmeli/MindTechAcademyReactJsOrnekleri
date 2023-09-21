
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header =()=>
{
   return  <Row>
        <Col lg style={{display:'flex', justifyContent:'left'}}>
            <img src="./logo.png" style={{width:'150px'}} ></img>

        </Col>
        <Col lg style={{display:'flex', justifyContent:'right'}}>
            <Row style={{width:'250px'}}>
                <Col sm style={{display:'flex', justifyContent:'right'}}>
                <button >Chars</button>
                </Col>
                <Col sm style={{display:'flex', justifyContent:'right'}}>
                <button >Films</button>
                </Col>
            </Row>
        </Col>
        
    </Row>
}
export default Header