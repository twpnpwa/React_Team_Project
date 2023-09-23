import "./App.css";
import "./Card.css";

const goToBlog = (userName) => {
  if (userName === "SJ") {
    window.location.href = "https://coffeecoding.tistory.com/";
  } else if (userName === "JY") {
    window.location.href = "https://velog.io/@zoo02";
  } else if (userName === "HB") {
    window.location.href = "https://velog.io/@liabin124";
  } else {
  }
};

function Card() {
  //   return (
  //     <div>
  //       <button onClick={goToBlog}></button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="member-tittle">
        <h2>Members</h2>
      </div>
      <div className="intro">
        <div className="card">
          <div className="memberImage" id="SY" />
          <div className="memberName">권소윤</div>
          <div className="personality">ENTJ</div>
          <button className="devBlog" onClick={() => goToBlog("SY")}>
            BLOG
          </button>
        </div>
        <div className="card">
          <div className="memberImage" id="JY" />
          <div className="memberName">김주영</div>
          <div className="personality">ISFP</div>
          <button className="devBlog" onClick={() => goToBlog("JY")}>
            BLOG
          </button>
        </div>
        <div className="card">
          <div className="memberImage" id="SJ" />
          <div className="memberName">이수진</div>
          <div className="personality">ISTP</div>
          <button className="devBlog" onClick={() => goToBlog("SJ")}>
            BLOG
          </button>
        </div>
        <div className="card">
          <div className="memberImage" id="HB" />
          <div className="memberName">이하빈</div>
          <div className="personality">ISFJ</div>
          <button className="devBlog" onClick={() => goToBlog("HB")}>
            BLOG
          </button>
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

export default Card;
