import React, { useState } from 'react'
import "./App.css"

const Footer = () => {

  const [guestbook, setGuestbook] = useState([
    { id: 0, name: (''), body: ('') }
  ])

  const [name, setName] = useState('')
  const [body, setBody] = useState('')


  const onNameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const clickAddButtonHandler = () => {
    const newGuestbook = {
      id: guestbook.length + 1,
      name: name,
      body: body
    }
    setGuestbook([...guestbook, newGuestbook])
    setName('')
    setBody('')
  }


  // 방문자와 내용을 입력하고 엔터를 눌러 방명록에 방문자명과 내용을 추가하는 함수
  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      clickAddButtonHandler();
      event.target.blur() // 내용 입력 후 포커스가 사라지게 하는 메서드
    }
  }


  return (
    <div>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">방문자명: </label>
          <input className="add-input" value={name} onChange={onNameChangeHandler} />
          <label className="form-label">내용 :</label>
          <input className="add-input2" value={body} onChange={onBodyChangeHandler}
            onKeyDown={keyPressHandler} />
        </div>
        <button onClick={clickAddButtonHandler} className="add-button">추가하기</button>
      </div>

      <h2 className="list-title">방명록</h2>


      {/* 방문자명과 내용을 입력받지 않았을 땐 방명록 박스가 보이지 않게 구현했습니다 
      입력받지 않은 상태에서의 방명록박스를 어떻게 디자인하면 좋을지 다같이 의논해봐요!!*/}
      <div className="list-wrapper">

        {
          guestbook.map(function (item) {
            if (item.name || item.body) {
              return (
                <div key={item.id} className="todo-container">
                  <div>
                    <h2 className="todo-title"> {item.name && <div>방문자: {item.name}</div>}</h2>
                    {item.body && <div>내용:{item.body}</div>}
                  </div>

                </div>
              )
            } else {
              return null
            }
          })}


      </div>
    </div>)
}
  ;

export default Footer;
