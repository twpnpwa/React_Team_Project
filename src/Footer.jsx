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

      <div className="list-wrapper">

        {
          guestbook.map(function (item) {
            return (
              <div key={item.id} className="todo-container">
                <div>
                  <h2 className="todo-title">방문자: {item.name}</h2>
                  <div>내용:{item.body}</div>
                </div>

              </div>
            )
          })}


      </div>
    </div>)
}
  ;

export default Footer;
