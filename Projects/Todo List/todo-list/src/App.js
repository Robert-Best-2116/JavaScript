import './App.css';
import React, {useState} from 'react';
import Task from './components/Task';
import TodoList from './components/TodoList';

//create a form to submit new tasks! Apparently cant use the word new or else it wont read.
//lift state from the new form component so it can be accessed by the todoList component
//create todolist component, which will iterate through all of the todo lists
//after iterating through the todoItems, we need to be able to check them off as completed
//then we will need check off said items as completed
//then we will need to be able to delete said items. 
function App() {

  //created state to pass down to the other components
  const [list, setList] = useState([]);


  return (
    
    <div>
      {
        //Passed down said state to child components. 
      }
      <TodoList list={ list } setList={setList}/>
      <Task list={ list } setList={setList}/>

    </div>
  );
}

export default App;

//finally finished, glad its over. 
