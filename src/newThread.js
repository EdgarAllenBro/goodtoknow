import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './App.css';
const axios = require('axios')



function NewThread(){
const [type,setType] = useState('')
const [content,setContent] = useState('')
const [title, setTitle] = useState('')

const handleTitle = (e)=>{
    setTitle(e.target.value)
}
const handleType = (e)=>{
    setType(e.target.value)}

const handleContent = (e)=>{
    setContent(e.target.value)}

const handleSubmit = ()=>{
if (title!=='' && content !== '') {
axios.post('http://localhost:3001/newThread', {
    type:type,
    content:content,
    title:title
}).catch(err=>{console.log(err)})
setTitle(''); setContent('');setType('')


} else (alert('you must have a title and Content to Create a new Thread')) }

return<div id='newThreadMain'>
<header><Link className='Link' to='/'>
<h1>Good To Know</h1> </Link>
</header>
<div id='newThreadBox'>

<form>
    <input onChange={handleTitle} id='newTitle' placeholder='Title' value={title}></input>
    <select onChange={handleType} name='type' id='typeSelect' defaultValue={'other'}>
        <option value='other'>Other</option>
        <option value='health'>Health</option>
        <option value='homeandgarden'>Home and Garden</option>
        <option value='survival'>OutDoor/survival</option>
        <option value='Tech'>Tech</option>
    </select>
    <textarea onChange={handleContent} id='newThread' value={content}></textarea>
</form>
<button id='newButton' onClick={handleSubmit}>Submit</button>
</div>

</div>
}

export default NewThread