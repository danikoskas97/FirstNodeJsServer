
let http  = require('http') // ouvrir server
let fs = require('fs')
let url = require('url')
let server = http.createServer() //creation du server

server.on('request', (request, response) => { // prend la requête et la réponse

    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'annonyme' : query.name
    
    fs.readFile('index.html', 'utf-8', (err, data) => { // affiche le fichier index.html 
        if (err)  {
            response.writeHead(404)
            response.end('Ce fichier existe pas')
        } else{
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8' //encodage utf-8
            
            })
            data = data.replace('{{ name }}', name)
            response.end(data)
        }
    })

})
server.listen(8080)

