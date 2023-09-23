import './App.css';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';

function App() {
  //   const goToBlog = () => {
  //     window.location.href = 'https://www.naver.com';
  //   }

  //   return (
  //     <div>
  //       <button onClick={goToBlog}></button>
  //     </div>
  //   );
  // }


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
          <div className='memberImage' id='SY' />
          <div className='memberName'>권소윤</div>
          <div className='personality'>ENTJ</div>
          <button className='devBlog' onClick={goToBlog}>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' id='JY' />
          <div className='memberName'>김주영</div>
          <div className='personality'>ISFP</div>
          <button className='devBlog'>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' id='SJ' />
          <div className='memberName'>이수진</div>
          <div className='personality'>ISTP</div>
          <button className='devBlog'>BLOG</button>
        </div>
        <div className='card'>
          <div className='memberImage' id='HB' />
          <div className='memberName'>이하빈</div>
          <div className='personality'>ISFJ</div>
          <button className='devBlog'>BLOG</button>
        </div>
      </div>

    </div>
  );

  // function Modal(){
  //   return (
  //     <div className='modal'>
  //     <h2>본인소개</h2>
  //     <p>안녕</p>
  //   </div>
  //   )
  // } 
}

export default App;