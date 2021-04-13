const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000


const users = JSON.parse(fs.readFileSync('data.json'))

const server = http.createServer((req,res) =>{
    const query = url.parse(req.url,true).query
    
    
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head> </head>')
    res.write('<body>')
    res.write('<h1>hello world</h1>')
    
    if(req.method ==="GET"){
        if(req.url === "/users"){
            res.write(JSON.stringify(users))
        }
        else if(req.url.includes("users")){
            res.write(JSON.stringify(users.filter(p => p.id == query.id)))
        }
        

    }
    // else if(req.method === "POST"){
        
    //     if(req.url === "/getuser"){
    //         res.write(users[0].name)
    //     }
    //     res.write("POST")
    // }
    
    res.write('</body>')
    res.write('</html>')
    res.end()

  


})




server.listen(port)

