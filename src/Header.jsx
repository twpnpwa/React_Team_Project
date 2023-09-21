import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap'

function App() {

  // let [modal, setModal] = useState(false);

  return (
    <div className="App">

       <div className='main-bg'></div>
      
      <div className='header'>
        <h4>npx create-react-app Team4</h4>
        <span>가보자고</span>
      </div>

      <div className='member-tittle'>
        <h2>Members</h2>
      </div>

      <div className='intro'>
        <Container>
          <Row>
            <Col><div className='card'><h3>조원이름</h3><p>mbti</p></div></Col>
            <Col><div className='card'><h3>조원이름</h3><p>mbti</p></div></Col>
            <Col><div className='card'><h3>조원이름</h3><p>mbti</p></div></Col>
            <Col><div className='card'><h3>조원이름</h3><p>mbti</p></div></Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

// function Modal(){
//   return (
//     <div className='modal'>
//     <h2>본인소개</h2>
//     <p>안녕</p>
//   </div>
//   )
// } 


export default App;