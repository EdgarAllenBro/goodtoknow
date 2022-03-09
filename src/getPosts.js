import React, {useState} from 'react'
const express = require('express')
const axios = require('axios')
const app = express()
const url = '../server/index.js'


function getThreads(){
const threads = axios.get(url`/threads`).then(res=>{console.log(res)})

return 
}