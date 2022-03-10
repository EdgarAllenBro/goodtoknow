import React, {useState} from 'react'
import './App.css';
const axios = require('axios')


function GetThreads() {
    const getThreads = ()=> axios.get('http://localhost:3001/threads')
    .then(res=>{console.log(res.data[0])})
    
    const [threads,setThreads] = useState([])
    
    setThreads(getThreads())

return <div>
{threads.map((e,i)=>{
 return <div key={i}>{e.title}</div>
})}

</div>


}


export default GetThreads