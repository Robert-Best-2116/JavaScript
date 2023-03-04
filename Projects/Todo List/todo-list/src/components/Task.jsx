import React, {useState} from 'react'
import TodoList from './TodoList';



// create a submit form button!
    //created also reset the form so its empty every time.
// lift the state!!! or create the state from above!!!!!  first lets just be able to add items 

    //alot more complex than i thought, even seeing it twice. did not enjoy this. 

    //now i need to add delete functionality, well psudo delete and 


//Create Task, pass state along to the app. 
const Task = (props) => {

    const [task, setTask] = useState ("");

    const {list, setList } = props;

    const createTask = (e) => {

        e.preventDefault();

        
        const newTask = {
            task: task,
            completed: false,
            id: crypto.randomUUID(),
        };
        
        setList([...list, newTask
        ])


        console.log("new", newTask)
        console.log("list", list)


        setTask("");
    }

  return (
    <form onSubmit={createTask}>
        <div>
            <label>Task: </label>
            <input type="text" value={task} onChange={ (e) => setTask(e.target.value)}/>
        </div>
        <div>
            <button type='submit'>Create Task</button>
        </div>

    </form>
  )
}

export default Task