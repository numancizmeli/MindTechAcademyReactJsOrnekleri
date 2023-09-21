import './filmChar.css'
import { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const FilmChar = (props) => {
    let myVar = props.dataSource.name
    const [show, setShow] = useState(false);
    
    const [charName, setCharName] = useState(props.dataSource.name)
    const [charHeight, setCharHeight] = useState(props.dataSource.height)
    const [charMass, setCharMass] = useState(props.dataSource.mass)

    const showDetails = () => {
        if (props.onCalisti !== undefined)
            props.onCalisti()
            setShow(true);
    }

    const hideDialog =()=>
    {
        setShow(false)
    }

    const getInput =()=>
    {
        myVar = prompt('please enter name',myVar)
        setCharName(myVar)
    }

    const saveChars =()=>
    {
        console.log(charName)
        console.log(charHeight)
        console.log(charMass)

    }

    return  <>
    
    <Modal show={show} onHide={hideDialog}>
    <Modal.Header closeButton>
      <Modal.Title>{props.dataSource.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Char Name</Form.Label>
        <Form.Control type="text" placeholder="enter char name" value={charName} onChange={(e)=>setCharName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Char Height</Form.Label>
        <Form.Control type="text" placeholder="enter char height" value={charHeight} onChange={(e)=>setCharHeight(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Char Mass</Form.Label>
        <Form.Control type="text" placeholder="enter char mass"  value={charMass} onChange={(e)=>setCharMass(e.target.value)} />
      </Form.Group>
    </Form>

    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={()=>setShow(false)} >Close</Button>
      <Button variant="primary" onClick={()=>saveChars()} >Save changes</Button>
    </Modal.Footer>
  </Modal>

    
    <table >
        <tbody>
        <tr>
            <td><img src={props.imageSource} style={{width:'250px'}} /> </td>
        </tr>
        <tr>
            <td>
                <center>
                    <input type="button" value={charName} id="idName"
                    className={'filmChars'}
                    onClick={showDetails}></input>
                   
                </center>

            </td>
        </tr>
        </tbody>
    </table>
    </>
}
export default FilmChar