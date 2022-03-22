import React, {useEffect, useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

const axios = require('axios')


function RanThread() {
const [threads,setThreads] = useState([])
const [ranThread,setRan] = useState({})
useEffect( ()=>{ axios.get('http://localhost:3001/threads')
    .then(res=>{setThreads(res.data)})},[]
 )
useEffect(()=>{
 let  ranNumb = Math.floor(Math.random() * threads.length)
setRan(threads[ranNumb])
},[threads])
  setTimeout(()=>{ 

return <div className='snippet'>
    <Link className='link' to={'/Thread'} 
state={{title:ranThread.title, tag:ranThread.tag, content:ranThread[0].content, threadid:ranThread[0].threadid}}>
        <h4 className='title'>{ranThread[0].title}</h4><p className='tag'>{ranThread[0].tag}</p> 
    </Link>
</div>
},2000)
}




export default RanThread