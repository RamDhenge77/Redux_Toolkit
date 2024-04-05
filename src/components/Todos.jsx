import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import { MdEditNote } from "react-icons/md";

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [crrInput, setCrrIput] = useState({ id: "", text: "" })

    const edit = (id) => {
        const todoItem = todos.find((todo) => todo.id === id);
        setCrrIput(todoItem)
    }

    const onChnage = (e)=>{
        setCrrIput({...crrInput, [e.target.name]: e.target.value})
    }

    const handleUpdate = (id) => {
        dispatch(updateTodo(crrInput))
        // console.log(id);
    }

    return (
        <div>
            {/* ----------------Modal Start-------------- */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={() => handleUpdate(crrInput.id)} className='form'>
                                <div className="mb-3">
                                    <input className="form-control" placeholder='Update Todo...' name="text"
                                        onChange={onChnage}
                                        value={crrInput.text} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-dark" data-bs-dismiss="modal" 
                            onClick={() => handleUpdate(crrInput.id)} >Update Todo</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------Modal End-------------- */}

            <h2 className='mt-5'>Todos</h2>
            <div className='container w-50 mt-5'>
                {todos.map((todo) => (
                    <div key={todo.id} className="card position-relative" style={{ width: "14rem", padding: "0", textAlign: "left" }}>

                        <div className='edit position-absolute' data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => edit(todo.id)}><MdEditNote /></div>

                        <div className="card-body">
                            <p className="card-text">{todo.text}</p>
                            <button className='btn btn-outline-danger btn-sm' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </div>
                    </div>
                ))


                }
            </div>
        </div>
    )
}

export default Todos
