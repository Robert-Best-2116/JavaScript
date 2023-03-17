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


function App() {
  return (
    <div className="App">

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


    </div>
  );
}

export default App;
