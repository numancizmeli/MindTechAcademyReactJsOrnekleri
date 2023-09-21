import './filmChar.css'
import { useState,useRef  } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const FilmCharwUseRef = (props) => {
    let myVar = props.dataSource.name
    const [show, setShow] = useState(false);
    const charNameRef = useRef(null)
    
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
        console.log(charNameRef.current)
    }

    return  <>
    
    <Modal show={show} onHide={hideDialog}>
    <Modal.Header closeButton>
      <Modal.Title>{props.dataSource.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <form>
      <input type="text" ref={charNameRef}></input>
      </form>
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
export default FilmCharwUseRef