import React, {useState} from 'react'
import sequelize from './sequelize'

function GetPosts () {
    const [posts,setPosts] = useState([])
const results = sequelize.query(`SELECT * FROM threads`)


    return <div>
        {posts.map((e,i)=>{
            return <p key={i}>{e}</p>
        })}
    </div>

}

export default GetPosts