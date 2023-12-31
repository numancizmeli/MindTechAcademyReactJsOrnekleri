import './filmChar.css'
import { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FilmCharDialog from './filmCharDialog';

const FilmChar = (props) => {
    let myVar = props.dataSource.name
    const [show, setShow] = useState(false);
    
    const [char, setChar] = useState(props.dataSource)
 
    const showDetails = () => {
        if (props.onCalisti !== undefined)
            props.onCalisti()
            setShow(true);
    }

   
    const saveChars =()=>
    {
        console.log(char)
      

    }
 

    return  <>
    
    <FilmCharDialog show={show} hideDialog={()=>setShow(false)} dataSource={props.dataSource} saveChars={()=>saveChars()}></FilmCharDialog>

    
    <table >
        <tbody>
        <tr>
            <td><img src={props.imageSource} style={{width:'250px'}} /> </td>
        </tr>
        <tr>
            <td>
                <center>
                <Button variant="warning" onClick={showDetails} size="lg">{char.name}</Button>
                  </center>
          </td>
        </tr>
        </tbody>
    </table>
    </>
}
export default FilmChar