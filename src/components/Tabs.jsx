import React from 'react'

function Tabs(props) {

 const {todos} = props;

    const tabs = ['All', 'open', 'completed'];

    const numOfTask = tabs.map((elem)=> elem==='All'?todos.length : elem==='open'?
    todos.filter((val)=> !(val.complete)).length : todos.filter((val)=> (val.complete)).length)
  
  return (
    <>
        {tabs.map((f, i) => <><button key={i}>{f}({numOfTask[i]})</button></>)}
   </>
  )
}

export default Tabs