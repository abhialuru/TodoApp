import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
 
  const {todos} = props

  return (
    <>
         {todos.map((_, index)=> 
            <TodoCard key={index} index={index}  {...props}/>
        )}
        
    </>
  )
}

export default TodoList