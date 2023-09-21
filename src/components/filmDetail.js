import './filmChar.css'
import { useState  } from 'react'
import Button from 'react-bootstrap/Button';
  
const FilmDetail = (props) => {
    let myVar = props.dataSource.name
    const [show, setShow] = useState(false);
    
    const [filmData, setFilmData] = useState(props.dataSource)
 
    const showDetails = () => {
        if (props.onCalisti !== undefined)
            props.onCalisti()
            setShow(true);
    }

   
    const saveChars =()=>
    {
        console.log(filmData)
      

    }
 

    return  <>
    
    
    <table >
        <tbody>
        <tr>
            <td><img src={props.imageSource} style={{width:'250px'}} /> </td>
        </tr>
        <tr>
            <td>
                <center>
                <Button variant="warning" onClick={showDetails} size="lg">{filmData.title}</Button>
                  </center>
          </td>
        </tr>
        <tr><td style={{background:'white'}}>
            {
                filmData.opening_crawl
            }
            </td></tr>
        </tbody>
    </table>
    </>
}
export default FilmDetail