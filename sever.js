
let http  = require('http') // ouvrir server
let fs = require('fs')
let url = require(url)


let server = http.createServer() //creation du server

server.on('request', (request, response) => { // prend la requête et la réponse

    response.writeHead(200)

    console.log(request.url)

    response.end('bonjour')




    /*
    fs.readFile('index.html', (err, data) => { // affiche le fichier index.html 
        if (err)  {
            response.writeHead(404)
            response.end('Ce fichier existe pas')
        } else{
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8' //encodage utf-8
            
            })
            response.end(data)
        }
    })
    */
})
server.listen(8080)




