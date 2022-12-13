import React from 'react'
import "./End.css"
export default function End({content,score}) {
  return (
    <div className='EndPage'>
        <p className='text'>{content}</p>
        <br/>
        <p className='text'>Score:{score}</p>
        <button onClick={()=>window.location.reload()}>Yeniden</button>
    </div>
  )
}
