import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import FilmCharsPage from './pages/filmCharsPage'
import FilmDetailsPage from './pages/filmDetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
function App() {
   const [visiblePage, setVisiblePage] = useState('char')
   console.log(process.env.REACT_APP_SWAPI_URL)
   return (
   
    <Container style={{background:'#000000', border:'solid 1px', width:'80%'}}>
     <Header onPageChanged={(val)=>setVisiblePage(val)}></Header>
     {visiblePage=='char'? <FilmCharsPage></FilmCharsPage> :<></>}
     {visiblePage=='film'?<FilmDetailsPage></FilmDetailsPage>:<></>}

     </Container>
     
  );
}

export default App;
