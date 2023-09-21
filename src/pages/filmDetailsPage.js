import FilmDetail from "../components/filmDetail"
import React,{ useState,useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { getFilmDetails} from '../apis/apiCalls'
import Form from 'react-bootstrap/Form'

const FilmDetailsPage = () => {

    const [filmData, setFilmData] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const [loaded,setLoaded] = useState(false)


    const rowx = [...Array(Math.ceil(filmData.length / 4))]
    const filmRows = rowx.map((row, id) => filmData.slice(id * 4, id * 4 + 4))

    useEffect(()=>{
        try {
            const request = getFilmDetails()
            request.then((response) => {
                setLoaded(false)
                if (response.status === 200) {
                    if (response.data.results !== undefined)
                    {
                        setFilmData(response.data.results)
                        setLoaded(true)
                    }
                       
                   
                }
                else alert('sunucudan cevap alamadım')

            }).catch((err) => { alert(err) })
        }
        catch (err) {
            alert(err)
        }
    },[])

  
    useEffect(()=>{
        let newData = []

        filmData.forEach((item)=>{
             
            if(item.title.includes(searchVal)===true)
                newData.push(item)
        })

        setFilmData(newData)

    },[searchVal])

 
 

    return <>    
    {
        loaded==false ?<b style={{color:'white'}}>Sunucudan Yanıt Bekleniyor, Lütfen Bekleyiniz...</b>
    :  
    <>
    <Form.Control type="text" value={searchVal} onChange={(e)=>setSearchVal(e.target.value) }></Form.Control>
        {filmRows.map((row, index) => {
            return (<Row key={index}>

                {row.map((item, index2) => {
                    return <Col key={item.name + index2}>

                        <FilmDetail key={item.name} dataSource={item}
                            imageSource={"https://starwars-visualguide.com/assets/img/films/" + (index2 + 4 * index + 1) + ".jpg"}

                        />
                    </Col>

                })
                }
 
            </Row>)
        })
        }
 </>
    }

    </>
}


export default FilmDetailsPage