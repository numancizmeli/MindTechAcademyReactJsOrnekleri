import FilmChar from "../components/filmChar"
import React,{ useState,useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {getFilmCharsFromBackEnd} from '../apis/apiCalls'
import Form from 'react-bootstrap/Form'

const FilmCharsPage = () => {

    const [charData, setCharData] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const [loaded,setLoaded] = useState(false)

    const rowx = [...Array(Math.ceil(charData.length / 4))]
    const filmRows = rowx.map((row, id) => charData.slice(id * 4, id * 4 + 4))

    useEffect(()=>{
        try {
            const request = getFilmCharsFromBackEnd()
            setLoaded(false)
            request.then((response) => {
                if (response.status === 200) {
                    if (response.data.results !== undefined)
                    {
                        setCharData(response.data.results)
                        setLoaded(true)

                    }
                   
                }
                else alert('sunucudan cevap alamadım')

            }).catch((err) => { alert(err);  setLoaded(false) })
        }
        catch (err) {
            alert(err)
        }
    },[])

  
    useEffect(()=>{
        let newData = []

        charData.forEach((item)=>{
            if(item.name.includes(searchVal)===true)
                newData.push(item)
        })

        setCharData(newData)

    },[searchVal])

 

    return   <> 
       {loaded==false ?<b style={{color:'white'}}>Sunucudan Yanıt Bekleniyor, Lütfen Bekleyiniz...</b>
    :  <>
    <Form.Control type="text" value={searchVal} onChange={(e)=>setSearchVal(e.target.value) }></Form.Control>
    {filmRows.map((row, index) => {
        return (<Row key={index}>

            {row.map((item, index2) => {
                return <Col key={item.name + index2}>

                    <FilmChar key={item.name} dataSource={item}
                        imageSource={"https://starwars-visualguide.com/assets/img/characters/" + (index2 + 4 * index + 1) + ".jpg"}

                    />
                </Col>

            })
            }

        </Row>)
    })
    }</>
}
         </>
    

   
}


export default FilmCharsPage