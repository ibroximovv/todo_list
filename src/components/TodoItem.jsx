import React from 'react'

const TodoItem = ({item, todos, setTodos, index}) => {
    function handleDelete() {
         todos.splice(index, 1)
         setTodos([...todos])
    }
    return (
        <li className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <strong className='text-[20px]'>{index + 1}.</strong>
                <p className='font-bold text-[20px]'>{item.value}</p>
            </div>
            <div className='flex items-center gap-2'>
                <button className='p-2 rounded-md bg-yellow-500 text-white w-[100px]'>Edit</button>
                <button onClick={handleDelete} className='p-2 rounded-md bg-red-900 text-white w-[100px]'>Delete</button>
                <label htmlFor="">
                    <input className='check-input hidden ' type="checkbox" />
                    <div className='check-wrapper w-5 h-5 rounded-full border-[1px] border-slate-500'></div>
                </label>
            </div>
        </li>
    )
}

export default TodoItem