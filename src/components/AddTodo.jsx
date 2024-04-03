import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className='container w-25'>
            <div>
                <h3 className='header w-full'>AddTodo</h3>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <div className="mb-3">
                    <input className="form-control" placeholder='Write Todo...'
                        onChange={(e) => setInput(e.target.value)}
                        value={input} />
                </div>
                <button type="submit" className='btn btn-dark btn-sm'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo
