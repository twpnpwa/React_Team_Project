import './App.css';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

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
        <div className='card'>
          <div className='memberImage' />
          <div className='memberName'>권소윤</div>
          <div className='personality'>EN?!</div>
          <button className='devBlog'>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' />
          <div className='memberName'>김주영</div>
          <div className='personality'>ISFP</div>
          <button className='devBlog'>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' />
          <div className='memberName'>이수진</div>
          <div className='personality'>ISTP</div>
          <button className='devBlog'>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' />
          <div className='memberName'>이하빈</div>
          <div className='personality'>ISFJ</div>
          <button className='devBlog'>BLOG</button>
        </div>
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