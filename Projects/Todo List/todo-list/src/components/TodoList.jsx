import React from 'react'

const TodoList = (props) => {

  const {list, setList } = props;

  const finished = (todo) => {

    if (todo.completed === false) {
      todo.completed = true;
      
      console.log(todo.completed);
    }
    else {
      todo.completed = false;
      console.log(todo.completed);
    }

  }

  const remove = (id) => {
    let newList = list.filter((todo) => todo.id !== id) 
    setList(newList);
    console.log(newList)
  }

  
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