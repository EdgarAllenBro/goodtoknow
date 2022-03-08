import React, {useState} from 'react'


function GetPosts () {
    const [posts,setPosts] = useState([])



    return <div>
        {posts.map((e,i)=>{
            return <p key={i}>{e}</p>
        })}
    </div>

}

export default GetPosts