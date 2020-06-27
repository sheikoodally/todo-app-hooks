import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
  {
    id: 1,
    task: "Laundry",
    completed: false
  },
  {
    id: 2,
    task: "Dentist Appointment",
    completed: false
  },
  {
    id: 3,
    task: "Groceries",
    completed: false
  },
  ]);

  const [value, setValue] = useState('');
  const [idVal, setIdVal] = useState();


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh
    addTodo(idVal ,value)
    setValue('');
    setIdVal('');
  }

  const handleTaskInputChange = (e) => {
    // e.target.value contains new input from onChange
    // event for input elements
    setValue(e.target.value);
  }

  const handleIdChange = (e) => {
    setIdVal(e);
  }

  console.log(todoList);

  let [updated, setUpdated] = useState(
    {
      //id: 0,
      task: '',
      completed: false
    },
  )

  const addTodo = (id, task) => {

    let counter = 3

    //setUpdated(updated.id= 4 , updated.task = task, updated.completed = false);
    //setUpdated({task:task, completed:false});
    const updatedTodo = [...todoList, {id:id ,task:task, completed:false}];
    setTodoList(updatedTodo);
    console.log(updated);

  }


  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <h1>Sheik todo list</h1>
      <div className="todoList">        
      </div>
      <div className="todoInput">
        {todoList.map((todo, index) => (
          <div key={index}>
            <span>{todo.task}</span>
            <button onClick={removeTodo.bind(this, todo.id)}>Close</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value = {value}
            placeholder="input task here"
            onChange = {handleTaskInputChange}
          />
          <button type='submit' onClick={handleIdChange.bind(this, uuid())}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
