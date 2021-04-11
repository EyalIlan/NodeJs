
const fs = require('fs')


// fs.writeFileSync('text.txt','hello world')

// fs.copyFileSync('text.txt','destination.txt')

// fs.renameSync('destination.txt','pokemon.txt')



const callback = (error,files) =>{
    
    if(error){
        console.log(error)
    }else{
        console.log(files)
    }
    
}
fs.readdir('2.1-file_system',callback)

fs.mkdir('eyal',(err) =>{
    console.log(err)
})

