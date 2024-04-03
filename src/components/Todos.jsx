import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='mt-5'>Todos</h2>
            <div className='container w-50 mt-5'>
                {todos.map((todo) => (
                    <div key={todo.id} className="card" style={{ width: "14rem", padding: "0", textAlign: "left" }}>
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
