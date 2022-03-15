import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
const axios = require('axios')



function Thread() {
const location = useLocation()
const [comments,setComments]= useState([])
const [newComment,setnewcomment] = useState('')
const {title,tag,content,threadid} = location.state

const handleComment = (e)=>{
    setnewcomment(e.target.value)
}
useEffect( ()=>{
    axios.post('http://localhost:3001/comments',{
        threadId:threadid
    })
    .then(res=>{setComments(res.data)})})

const sendComment = ()=>{
    if(newComment !== ''){
axios.post('http://localhost:3001/comment',{
   threadid:threadid,
   comment:newComment
}).catch(err=>{console.log(err)})
setnewcomment('')} else(alert('cannot submit and empty comment'))
}
   
return <div>
    <main>
      <header><Link className='Link' to='/'>
        <h1>Good To Know</h1> </Link>
      </header>
    <div>
        <h2>{title}</h2>
        <p>{tag}</p>
        <p>{content}</p>
    </div>
    <div>
    <input onChange={handleComment} id='newComment' placeholder='Comment' value={newComment}></input>
    <button id='commentButton' onClick={sendComment}>Submit</button>
    </div>
    <div>{comments.map((e,i)=>{return <p className='comment' key={i}>{e.content}</p>})}</div>
      </main>
</div>
}


export default Thread