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


return (
  <div>
    <div className="add-form">
      <div className="input-group">
        <label className="form-label">방문자명: </label>
        <input className="add-input" value={name} onChange={onNameChangeHandler} />
        <label className="form-label">내용 :</label>
        <input className="add-input2" value={body} onChange={onBodyChangeHandler} />
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
