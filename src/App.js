import React, {useState} from 'react'
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import NewThread from './newThread';
import GetThreads from './getThreads'
import Thread from './Thread';
const axios = require('axios')

function App() {


return <div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='NewThread' element={<NewThread/>}/>
  <Route path='thread' element={<Thread />}/>
</Routes>
</div>
}
function Home() {
  return(
    <>
      <main>
      <header><Link className='Link' to='/'>
        <h1>Good To Know</h1> </Link>
      </header>
        <h2>Welcome to my homepage</h2>
        <p>this is a test</p>
        <nav>
        <Link className='Link' to='/NewThread'>Create New</Link>
        </nav>
        <GetThreads />
      </main>
    </>
  )
}

export default App;
