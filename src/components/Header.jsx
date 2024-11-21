import React from 'react'

function Header(props) {
          
  const { todos } = props;

 

  const taskPlural = todos.length === 1 ? 'task':'tasks';
    
  return (
     <>
     <h2 className='header-title'>you have {todos.length} open {taskPlural}.</h2>
     </>
  )
}

export default Header