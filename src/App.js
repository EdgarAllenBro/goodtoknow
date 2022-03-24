import React, {useState} from 'react'
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import NewThread from './newThread';
import GetThreads from './getThreads';
import Thread from './Thread';

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
      <div id='create'>
        <Link id='createNew' className='link' to='/NewThread'>Create New</Link>
        </div>
      <div id='main'>
        <GetThreads />
        </div>
      </main>
    </>
  )
}

export default App;
