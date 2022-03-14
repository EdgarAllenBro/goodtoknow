import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'



function Thread() {
const location = useLocation()
const {title,tag,content} = location.state
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
      </main>
</div>
}




export default Thread