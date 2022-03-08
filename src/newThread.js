import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css';




function NewThread(){


return<div>
<header><Link className='Link' to='/'>
<h1>Good To Know</h1> </Link>
</header>
<div id='newThreadBox'>
<form>
<input id='newSummary' placeholder='Summary'></input>
<textarea id='newThread'></textarea>

</form>
</div>

</div>
}

export default NewThread