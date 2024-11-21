 import React from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
 
 function App() {

     const todos = [
                    {input: 'hair saloon',complete: true},
                    { input: 'Get the Groceries',complete: false},
                    {input: 'Finish the react course',complete: false},
                    {input: 'call any of the friend at night ',complete: true}
                   ]


   return (
      <>
      <Header  todos={todos}/>
      <Tabs todos={todos} />
      <TodoInput todos={todos}/>
      <TodoList todos={todos}/>
      </>
   )
 }
 
 export default App