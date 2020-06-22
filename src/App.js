import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
  {
    id: 1,
    task: "Laundry",
  },
  {
    id: 2,
    task: "Dentist Appointment",
  },
  {
    id: 3,
    task: "Groceries",
  },
  ]);

  const [value, setValue] = useState('');
  console.log(value);


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh
    addTodo(value)
    setValue('');
  }

  const handleTaskInputChange = (e) => {
    // e.target.value contains new input from onChange
    // event for input elements
    setValue(e.target.value);
  }

  console.log(todoList);

  const addTodo = (task) => {
    const updatedTodo = {...todoList, }
    setTodoList(updatedTodo);
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
        {todoList.map((todo) => (
          <div key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={removeTodo}>Close</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value = {value}
            placeholder="input task here"
            onChange = {handleTaskInputChange}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
