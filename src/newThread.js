import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css';




function NewThread(){
const [type,setType] = useState('')
const [summary,setSummary] = useState('')
const [content,setContent] = useState('')
const [title, setTitle] = useState('')

const handleTitle = (e)=>{
    setTitle(e.target.value)
}
const handleType = (e)=>{
    setType(e.target.value)}
const handleSummary = (e)=>{
    setSummary(e.target.value)}
const handleContent = (e)=>{
    setContent(e.target.value)}

const handleSubmit = ()=>{
console.log(`type is: ${type} summary is: ${summary} conetent is: ${content}`)
}

return<div>
<header><Link className='Link' to='/'>
<h1>Good To Know</h1> </Link>
</header>
<div id='newThreadBox'>

<form>
    <input onChange={handleTitle} id='newTitle' placeholder='Title'></input>
    <select onChange={handleType} name='type' id='typeSelect'>
        <option value='other'>Other</option>
        <option value='health'>Health</option>
        <option value='survival'>OutDoor/survival</option>
        <option value='Tech'>Tech</option>
        <option value='homeandgarden'>Home and Garden</option>
    </select>
    <input onChange={handleSummary} id='newSummary' placeholder='Summary'></input>
    <textarea onChange={handleContent} id='newThread'></textarea>
</form>
<button onClick={handleSubmit}>Submit</button>
</div>

</div>
}

export default NewThread