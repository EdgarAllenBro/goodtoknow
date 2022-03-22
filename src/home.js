import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import GetThreads from './getThreads';

function Home() {
    return(
      <>
        <main>
        <div>
        <header><Link className='Link' to='/'>
          <h1>Good To Know</h1> </Link>
        </header>
          <div id='create'>
          <Link id='createNew' className='link' to='/NewThread'>Create New</Link>
          </div></div>
          <GetThreads />
  
        </main>
      </>
    )
  }

  
  export default Home