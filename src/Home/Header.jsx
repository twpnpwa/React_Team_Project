import './App.css';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Content = () => {
  return <div className="App">


    <div className='main-bg'></div>

    <div className='header'>
      <br></br>
      <h1><span className="yarntitle">$ yarn create react-app Team4</span></h1>
      <div className="headerImage">
      </div>
      <h2 className="yarnbody">퇴근하고 노을지면 우린 이제 시작이다..</h2>
      <span className="yarnbody">a.k.a 직장인 찐광기</span>
      <div class="absolute-rtan-area">
        {/* <img src="https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33" onclick="showModal()" /> */}
        <img src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" onclick="showModal()" />

      </div>

    </div>

  </div>
    ;
};

export default Content;
