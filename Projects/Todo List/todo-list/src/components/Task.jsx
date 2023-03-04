import React, {useState} from 'react'
import TodoList from './TodoList';



// create a submit form button!
    //created also reset the form so its empty every time.
// lift the state!!! or create the state from above!!!!!  first lets just be able to add items 

    //alot more complex than i thought, even seeing it twice. did not enjoy this. 

    //now i need to add delete functionality, well pseudo delete and 


//Create Task, pass state along to the app. 
const Task = (props) => {
    
    // Created useState for creating tasks 
    const [task, setTask] = useState ("");

    // Deconstructed props for the useState for the list so i dont have to go props.list props.setList
    const {list, setList } = props;

    // Created tasks
    const createTask = (e) => {

        e.preventDefault();

        // task object 
        const newTask = {
            task: task,
            completed: false,
            id: crypto.randomUUID(),
        };
        
        // created a new list with the previous list objects and added the new task object to it. 
        setList([...list, newTask
        ])

        //check to see that i was successful 
        console.log("new", newTask)
        console.log("list", list)

        // cleared the task object so that its empty after adding new tasks
        setTask("");
    }

    //Created form for the creation of a new form object. 
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