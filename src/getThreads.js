import React, {useEffect, useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

const axios = require('axios')


function GetThreads() {
const [threads,setThreads] = useState([])

useEffect( ()=>{ axios.get('http://localhost:3001/threads')
    .then(res=>{setThreads(res.data)})},[]
 )
 const showHideSibling = (e)=>{
        let target = e.target.nextElementSibling
        if (target.style.display === 'none') {
            target.style.display = 'block'}
        else{ target.style.display = 'none'}
         }

   
return <div>
{threads.map((e,i)=>{
    return <div className='snippet' key={i}>
       <Link to={'/Thread'} state={{title:e.title, tag:e.tag, content:e.content}}> <h4 className='title'>{e.title}</h4><p className='tag'>{e.tag}</p> 
</Link>
    </div>
})}

</div>


}


export default GetThreads