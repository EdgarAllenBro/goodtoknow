import React, {useEffect, useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

const axios = require('axios')


function GetThreads() {
const [threads,setThreads] = useState([])
const [random,setRandom] = useState()

useEffect( ()=>{ axios.get('http://localhost:3001/threads')
    .then(res=>{setThreads(res.data)})},[]
 )
 
return <> 

<div id='snippetContainer'>
{threads.map((e,i)=>{ 
    return <div key={i}>
       <Link className='link, snippet' to={'/Thread'} state={{title:e.title, tag:e.tag, content:e.content, threadid:e.threadid}}> 
       <h4 className='title'>{e.title}</h4>
       <p className='tag'>{e.tag}</p> 
</Link>
    </div>
})}

</div>
</>

}


export default GetThreads