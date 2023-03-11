import './App.css';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Survey from './components/Survey';

// const Home = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "red"}}>
//         Home Component
//       </h1>
//       <Link to={"/about"}>Go To About Component</Link>
//     </div>
//   )
// }

// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "blue"}}>
//         About Component
//       </h1>
//       <Link to={"/"}>Go To Home Component</Link>
//     </div>
//   )
// }

const Location = (props) => {
  const {city} = useParams();
  return (
    <div>

      <h1>Welcome to {city}</h1>
      <Link to={"/"}>Home</Link>

    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/survey" element={<Survey/>} />
        </Routes>
        <p>
          <Link to="/location/seattle">Seattle</Link>
            | 
          <Link to="/location/chicago">Chicago</Link>
            | 
          <Link to="/location/burbank">Burbank</Link>
        </p>
        <Routes>
          <Route path="/location/:city" element={<Location />}/>
        </Routes>

      </div>
    
    </BrowserRouter>
  );
}

export default App;
