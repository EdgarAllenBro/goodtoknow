import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css';




function NewThread(){
const [type,setType] = useState('')
const [summary,setSummary] = useState('')
const [content,setContent] = useState('')

return<div>
<header><Link className='Link' to='/'>
<h1>Good To Know</h1> </Link>
</header>
<div id='newThreadBox'>
<form>
<select name='type' id='typeSelect'>
<option value='other'>Other</option>
<option value='medical'>Medical</option>
<option value='wilderness'>Wilderness</option>
<option value='Tech'>Tech</option>
<option value=''></option>
</select>
<input id='newSummary' placeholder='Summary'></input>
<textarea id='newThread'></textarea>
</form>
</div>

</div>
}

export default NewThread