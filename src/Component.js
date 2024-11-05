import React, { useState } from 'react'
import './Component.css'

function Component() {
    const [text,setText] = useState('');
    const [show,setshow] = useState(true);
    const [text2,setText2] = useState('');
  return (
    <>
    <div className='main'>
      <center><h1>React Assignment 2</h1></center>
      <p>Question-1</p>
      <div className="q1">
        <input type="text" onChange={(textt)=>setText(textt.target.value)} placeholder='Enter Here' />
        <p>Entered Text is : <span className='EnteredText'> {text}</span></p>
      </div>
      <p>Question-2</p>
      <div className="q2">
        <p>{show ? "I am a passionate and dedicated web developer with a strong foundation in HTML, CSS, JavaScript, and React.js. With hands-on experience in creating responsive and user-friendly websites, I continually strive to enhance my skills. I aim to become a full stack developer and contribute to impactful projects." : ""}</p>
        <button onClick={()=>setshow(!show)}>Show/Hide</button>
      </div>
      <p>Question-3</p>
      <div className="q1">
        <textarea rows={7} cols={50} type="text" onChange={(textt2)=>setText2(textt2.target.value)} placeholder='Enter Here' />
        <p>Entered Text is : <span className='EnteredText'> {text2}</span></p>
        <p>Text Length is : <span className='EnteredText'> {text2.length}</span></p>
      </div>
    </div>
    <footer><p>Ma'am, I Created this just for the task.</p></footer>
    </>
  )
}

export default Component
