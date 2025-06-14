import React, { useContext } from 'react'
import TodoItem from '../components/TodoItem'
import { Context } from '../Context/Context'

const TodoList = () => {
  const { todos, setTodos } = useContext(Context)
  return (
    <ul className='w-full min-w-[300px] max-w-[500px] bg-white p-2 min-[400px]:p-5 rounded-md mt-5 mx-auto space-y-2 min-[400px]:space-y-3'>
      {todos.map((item, index) => <TodoItem key={item.id} index={index} setTodos={setTodos} todos={todos} item={item} />)}
    </ul>
  )
}

export default TodoList