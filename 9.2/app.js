let http = require('http')
let fs = require('fs')
let path = require('path')

let port = 3000


http.createServer((req, res) => {

    if (req.method === "GET") {

        res.writeHead(200, { 'Content-Type': 'text/plain' })

        if (req.url === "/raw-html") {
            res.write('<h1> Hello, I am a webserver ! </h1>');
            res.end();
        }
        if (req.url === "/users") {
            fs.writeFile('usersData.json', JSON.stringify([{ id: 0, name: 'eyal' }, { id: 1, name: "netanel" }]), (err) => {
                console.log(err)
            })
        }
        if (req.url === "/") {
            console.log(__dirname)
            fs.readFile(path.join(__dirname, '/index.html'), null, (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                if (err) {
                    console.log('Errror')
                    console.log(err)
                } else {
                    res.write(data)
                }
                res.end()
            })

        }


    }
    else {
       res.write('ONLY GET METHOD ALLOWD!')
       res.end()
    }

}).listen(port)