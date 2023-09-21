import './filmChar.css'
import { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const FilmChar = (props) => {
    let myVar = props.dataSource.name
    const [show, setShow] = useState(false);

    const [charName, setCharName] = useState(props.dataSource.name)
    
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
    return  <>
    
    <Modal show={show} onHide={hideDialog}>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={()=>setShow(false)} >Close</Button>
      <Button variant="primary">Save changes</Button>
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