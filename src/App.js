import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import FilmCharsPage from './pages/filmCharsPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
   return (
   
    <Container style={{background:'#000000', border:'solid 1px', width:'80%'}}>
     <Header></Header>
     <FilmCharsPage></FilmCharsPage>
     </Container>
     
  );
}

export default App;
