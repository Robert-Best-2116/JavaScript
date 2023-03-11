import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"

const Number = (props) => {
  const {num} = useParams();
  return (
    <div>
      <h1>
          The Number is: {num}
      </h1>
          <Link to={"/"}>Go Back</Link>
    </div>
  );
}

const Word = (props) => {
  const {word} = useParams();
  return (
    <div>
      <h1>
          The word is: {word}
      </h1>
          <Link to={"/"}>Go Back</Link>
    </div>
  );
}
//Create new Const, Random, const will have an if check using the isNAN() method, if nan is false, have it render the num component, if isNAN() if true, have it render the word component. 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='/:num' element={<Number/>} />
          <Route path='/:word' element={<Word/>} />
        </Routes>
        <div className='Links'>
          <p>
            <Link to="/home"> Home </Link>
          </p>
            
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
