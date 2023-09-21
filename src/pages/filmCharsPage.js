import FilmChar from "../components/filmChar"
import FilmCharwUseRef from "../components/filmCharwUseRef"

import { charData } from "../data/charData"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilmCharsPage = () => {

    const showMoreDetails = () => {
        alert('daha fazla detay')
    }
    console.log(charData)
    const rowx = [...Array(Math.ceil(charData.length / 4))]

    const filmRows = rowx.map((row, id) => charData.slice(id * 4, id * 4 + 4))

    console.log(filmRows)

    return <>
        {  filmRows.map((row, index) => {
                return (<Row key={index}>

                    {  row.map((item, index2)=>{
                       return <Col  key={item.name+index2}>
                            
                              <FilmChar key={item.name} dataSource={item}
                                imageSource={"https://starwars-visualguide.com/assets/img/characters/" + ( index2+ 4*index + 1) + ".jpg"}

                            /> 
                        </Col>

                    })
                }
          


                </Row>)
            })
        }


    </>
}


export default FilmCharsPage