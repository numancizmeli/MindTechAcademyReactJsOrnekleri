
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header =(props)=>
{
   return  <Row>
        <Col lg style={{display:'flex', justifyContent:'left'}}>
            <img src="./logo.png" style={{width:'150px'}} ></img>

        </Col>
        <Col lg style={{display:'flex', justifyContent:'right'}}>
            <Row style={{width:'250px'}}>
                <Col md style={{display:'flex', justifyContent:'right'}}>
                <Button variant="primary"  size="md" 
                onClick={()=>props.onPageChanged('char')}
                >Chars</Button>
                </Col>
                <Col md style={{display:'flex', justifyContent:'right'}}>
                <Button variant="success" size="md"
                 onClick={()=>props.onPageChanged('film')}
                >Film</Button>
                </Col>
            </Row>
        </Col>
        
    </Row>
}
export default Header