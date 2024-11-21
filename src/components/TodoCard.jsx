import React from 'react'

function TodoCard(props) {

  const {index, todos} = props;
   const todo = todos[index];
  
  return (
    <> 
      <hr />
    <p>{todo.input}</p>  
    <div>
      <button>Done</button>
      <button>Delete</button>
    </div>
    <hr />
    </>
  )
}

export default TodoCard