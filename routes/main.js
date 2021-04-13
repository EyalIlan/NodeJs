
const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/',(req,res) =>{
    res.json({success:'success'})
})

router.get('/users/getuserbyid',(req,res) =>{
    
    res.json({success:[1,2,3,4]})
})

router.get('/user/:id',(req,res) =>{
    console.log(req.params)
})

router.post('/add/:id/:name',(req,res) =>{
    
     let name =  req.params.name
     let id =  req.params.id


    const data = JSON.parse(fs.readFileSync('data.json'))
    data.push({id:id,name:name})
    fs.writeFileSync('data.json',JSON.stringify(data))
    
    return res.status(200).json({success:'success'}) 
})

router.put('/',(req,res)=>{

    const {id,name} = req.body
    let data = JSON.parse(fs.readFileSync('data.json'))

    data = data.map(p =>{
        if(p.id === id){
            return {id:id,name:name}
        }else{
            return p
        }
    })

    fs.writeFileSync('data.json',JSON.stringify(data))

})


module.exports = router