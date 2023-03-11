import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Rand from './components/Rand';
import Many from './components/Many';


// initial attempts for passing in numbers and words until i used the if statement. 

// const Number = (props) => {
//   const {num} = useParams();
//   return (
//     <div>
//       <h1>
//           The Number is: {num}
//       </h1>
//           <Link to={"/"}>Go Back</Link>
//     </div>
//   );
// }

// const Word = (props) => {
//   const {word} = useParams();
//   return (
//     <div>
//       <h1>
//           The word is: {word}
//       </h1>
//           <Link to={"/"}>Go Back</Link>
//     </div>
//   );
// }

// Test code for useParams

// const Rand = (props) => {
//   const {rand} =useParams(); 
  

//     if (isNaN(rand) ) {
//       return (
//         <div>
//           <h1>
//               The word is: {rand}
//           </h1>
//               <Link to={"/"}>Go Back</Link>
//         </div>
//       );
//       } else {
//         return (
//           <div>
//             <h1>
//                 The Number is: {rand}
//             </h1>
//                 <Link to={"/"}>Go Back</Link>
//           </div>
//         );
//       }
//     };

// test code for many useParams. 

// const Many = (props) => {
//   const {word, color, bkgrndColor} = useParams();
//   return (
//     <div style={{backgroundColor : bkgrndColor}}>
//       <h1 style={{color : color}}>
//         The word is : {word}
//       </h1>
//     </div>
//   )
// }


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='/:rand' element={<Rand/>} />
          <Route path='/:word/:color/:bkgrndColor' element={<Many />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
