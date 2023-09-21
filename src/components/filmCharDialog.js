import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const FilmCharDialog = (props)=>
{


    return    <Modal show={props.show} onHide={props.hideDialog}>
    <Modal.Header closeButton>
      <Modal.Title>{props.dataSource.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Char Name</Form.Label>
        <Form.Control type="text" placeholder="enter char name" value={props.dataSource.name} onChange={(e)=> props.setChar('name', e.target.value)  } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Char Height</Form.Label>
        <Form.Control type="text" placeholder="enter char height" value={props.dataSource.height} onChange={(e)=>  props.setChar('height', e.target.value)  } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Char Mass</Form.Label>
        <Form.Control type="text" placeholder="enter char mass"  value={props.dataSource.mass} onChange={(e)=>  props.setChar('mass', e.target.value) }  />
      </Form.Group>
    </Form>

    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={()=>props.hideDialog()} >Close</Button>
      <Button variant="primary" onClick={()=>props.saveChars()} >Save changes</Button>
    </Modal.Footer>
  </Modal>
}

export default FilmCharDialog