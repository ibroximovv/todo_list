import React from 'react'

const TodoItem = ({item, todos, setTodos, index}) => {
    function handleDelete() {
         todos.splice(index, 1)
         setTodos([...todos])
    }
    function handleEdit() {
        let newValue = prompt(item.value);
        item.value = newValue
        setTodos([...todos])
    }
    function handleCheckClick() {
        item.isComplated = !item.isComplated
        // console.log([...todos]);
        setTodos([...todos])
    }
    return (
        <li className={`${item.isComplated ? 'opacity-[50%] before:absolute before:w-[95%] before:h-[2px] before:bg-black' : ''} relative flex items-center justify-between`}>
            <div className='flex items-center gap-1'>
                <strong className='text-[20px] text-[#0B1D51]'>{index + 1}.</strong>
                <p className='font-bold text-[20px] text-[#0B1D51]'>{item.value}</p>
            </div>
            <div className='flex items-center gap-2'>
                <button onClick={handleEdit} className='p-2 rounded-md bg-blue-900 text-white w-[100px]'>Edit</button>
                <button onClick={handleDelete} className='p-2 rounded-md bg-red-900 text-white w-[100px]'>Delete</button>
                <label htmlFor="">
                    <input className='check-input hidden ' placeholder='typing...' type="checkbox" />
                    <div onClick={handleCheckClick} className={`check-wrapper ${item.isComplated ? 'check-true' : ''} w-5 h-5 rounded-full border-[1px] border-slate-500`}></div>
                </label>
            </div>
        </li>
    )
}

export default TodoItem