import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
const axios = require('axios')



function Thread() {
const location = useLocation()
const [comments,setComments]= useState([])
const [newComment,setnewcomment] = useState('')
const [counter,setCounter] = useState(1)
const {title,tag,content,threadid} = location.state

const handleComment = (e)=>{
    setnewcomment(e.target.value)
}

useEffect( ()=>{
    axios.post('http://localhost:3001/comments',{
        threadId:threadid
    })
    .then(res=>{setComments(res.data)})},[counter])

const sendComment = ()=>{
    if(newComment !== ''){
    axios.post('http://localhost:3001/comment',{
        threadid:threadid,
        comment:newComment
        }).catch(err=>{console.log(err)})
    setnewcomment('')
    setCounter(counter + 1)
    console.log(counter)} 
else(alert('cannot submit an empty comment'))
}

return <div>
    <main id='threadMain'>
      <header><Link className='Link' to='/'>
        <h1>Good To Know</h1> </Link>
      </header>
    <div id='threadBox'>
        <h2 id='threadTitle'>{title}</h2>
        <p id='threadTag'>{tag}</p>
        <div id='threadContent'>{content}</div>
    </div>
    <h3 id='commentTitle'>Comments</h3>
    <div>
    <input onChange={handleComment} id='newComment' placeholder='New Comment' value={newComment}></input>
    <button id='commentButton' onClick={sendComment}>Submit</button>
    </div>
    <div id='commentBox' >{comments.map((e,i)=>{return <p className='comment' key={i}>{e.content}</p>})}</div>
      </main>
</div>
}


export default Thread