import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
  {
    id: "0",
    task: "Laundry",
    completed: false
  },
  {
    id: "1",
    task: "Dentist Appointment",
    completed: false
  },
  {
    id: "2",
    task: "Groceries",
    completed: false
  },
  ]);

  const [value, setValue] = useState('');
  console.log(todoList);


  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
  }

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodoList({ ...todoList, task: e.target.value });
  }

  function removeTodo(id) {
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
            <button key={todo.id} onClick={removeTodo}>Close</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="input task here"
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
