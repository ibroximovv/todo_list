import { useState } from 'react'
import './App.css'
import TodoForm from './modules/TodoForm'
import TodoList from './modules/TodoList'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  localStorage.setItem('todos', JSON.stringify(todos))
  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </>
  )
}

export default App
