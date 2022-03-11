import React, {useEffect, useState} from 'react'
import './App.css';
const axios = require('axios')


function GetThreads() {
const [threads,setThreads] = useState([])

useEffect( ()=>{ axios.get('http://localhost:3001/threads')
    .then(res=>{setThreads(res.data)})},[]
 )
   
return <div>
{threads.map((e,i)=>{
    return <div className='snippet' key={i}>{e.threadid}:{e.title}</div>
})}

</div>


}


export default GetThreads