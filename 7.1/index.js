const axios = require('axios')
const request = require('request')
const https = require('https')

let url = 'https://api.chucknorris.io/jokes/random'

const getData = (cb) =>{

    axios.get('https://api.chucknorris.io/jokes/random')
    .then(result =>{
        console.log(result.data.value)
    })

    request({url:url,json:true},(error,responce) =>{
        console.log(responce.body.value)
    })


    https.get('https://api.chucknorris.io/jokes/random',res =>{

        let data = ""

        res.on("data",chunk =>{
            // console.log(chunk)
            data += chunk
        })

        res.on("end",() =>{
            data = JSON.parse(data)
            console.log(data.value)
        })

    })


}

getData()