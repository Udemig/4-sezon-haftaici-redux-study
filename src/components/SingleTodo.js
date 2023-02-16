import React from "react";
import {useDispatch} from "react-redux"

const SingleTodo=({todo})=>{
    const dispatch=useDispatch()
    const deleteTodo=()=>{
        dispatch({type:"DELETE_TODO",payload:todo.id})
    }
    return(
        <div>
            <h1>{todo.text}</h1>
            <button onClick={deleteTodo}>Delete</button>
            <hr />
        </div>
    )
}

export default SingleTodo