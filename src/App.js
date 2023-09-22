import './App.css';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="outline">
      <div className="maincss">
        <Header />
        <Content />
        <Footer />
        <h1></h1>
      </div>
    </div>

  );
}

export default App;
