import React from 'react'
import "./question.css"
export default function Question({question}) {
  return (
    <div className='questionContainer'>
      <p>{question}</p>
    </div>
  )
}
