import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
    {text: 'Mow the lawn'},
    {text: 'Wash the car'}
  ]);

  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Sheik todo list</h1>
      <div className="todoList">
        {todoList.map((todo,index) => (
          <div>
          <span key={index}>{todo.text}</span>
          <button>Delete</button>
          </div>
        ))
      }
      </div>
      <div className="todoInput">
        <form>
          <input type="text" placeholder="input task here"/>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
