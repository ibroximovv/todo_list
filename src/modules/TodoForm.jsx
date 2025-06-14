import React, { useContext } from 'react'
import { Context } from '../Context/Context'

const TodoForm = () => {
  const {setTodos, todos} = useContext(Context)
  function handleAddTodo(params) {
    params.preventDefault()
    let todo = {
      id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
      value: params.target.todoInp.value,
      isComplated: false
    }
    setTodos([...todos, todo])
    params.target.reset()
  }
  return (
    <form onSubmit={handleAddTodo} autoComplete='off' className='w-[500px] flex items-center justify-between p-5 rounded-md bg-white mx-auto mt-10 gap-[10px]'>
      <input required className='w-[78%] py-3 pl-2 rounded-md border-[2px] border-slate-500' name='todoInp' type="text" />
      <button className='w-[18%] p-[12px] font-bold text-[20px] text-[#0B1D51] bg-gradient-to-br from-pink-200 to-blue-200 rounded-md' type='submit'>Add</button>
    </form>
  )
}

export default TodoForm