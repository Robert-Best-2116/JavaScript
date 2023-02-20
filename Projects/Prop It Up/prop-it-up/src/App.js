import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Robert"} lastName={"Best"} age={"31"} hairColor={"Black"}/>
      <PersonCard firstName={"Haylee"} lastName={"Jones"} age={"23"} hairColor={"Black"}/>
      <PersonCard firstName={"Larry"} lastName={"Roiem"} age={"??"} hairColor={"Blond"}/>
      <PersonCard firstName={"Peter"} lastName={"Jewel"} age={"34"} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
