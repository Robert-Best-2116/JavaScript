import React from 'react'

const TodoList = (props) => {

  // Deconstructed props 
  const {list, setList } = props;

  // Added a checkbox functionality, and changed the value of completed, unable to figure out how to input a style tried several methods for setting the style={{"textDecoration: line-through"}} gave errors for line-through, also targeted it by class, to set the style, just more errors. not sure what i did wrong. 
  const finished = (todo) => {

    if (todo.completed === false) {
      todo.completed = true;
      //checked to be sure it worked. 
      console.log(todo.completed);
    }
    else {
      //reset the value 
      todo.completed = false;
      console.log(todo.completed);
    }

  }

  // simplest way i could think of to return a new list without the object. 
  const remove = (id) => {
    let newList = list.filter((todo) => todo.id !== id) 
    setList(newList);
    console.log(newList)
  }

  // iterate through the list object with map. Broke down the h3 for readability. 
  return (

    <div>
        <h1>Current Tasks!</h1>
        {list.map((todo, index) => (
          <div>

              <h3>
                Task: {todo.task} 
                Completed: <input type="checkbox" onChange={() => finished(todo)} />
                <button onClick={ () => remove(todo.id)}>Delete</button>
              </h3>
            
              

          </div>
        ))}
    </div>
  )
}

export default TodoList