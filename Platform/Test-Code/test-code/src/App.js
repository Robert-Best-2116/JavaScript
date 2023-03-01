<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import UserForm from './components/UserForm';
import MyNewComponent from './components/MyNewComponent';
import MyButtonComponent from './components/MyButtonComponent';
import Groceries from './components/Groceries';
// import PersonCard from './components/PersonCard';
// import SomeFunctionalComponent from './components/SomeFunctionalComponent';
// import Header from './components/Header';
// import Counter from './components/Counter';
// import Name from './components/Name';
// import Text from './components/Text'
// import Items from './components/Items';

>>>>>>> baf93b197aca348e12f11cb643eb49262d50269a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======

      {/* <SomeFunctionalComponent/>
      <PersonCard/>
      <Header firstName={ "Bill" } lastName={ "Justice" } />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <Counter/>
      <Name/>
      <Text/>
      <Items/> */}
      {/* <UserForm/>
      <MovieForm/>
      <MyNewComponent header={ "Header Prop Test" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </MyNewComponent>  */}
      <MyButtonComponent/>
      <Groceries/>


>>>>>>> baf93b197aca348e12f11cb643eb49262d50269a
    </div>
  );
}

export default App;
