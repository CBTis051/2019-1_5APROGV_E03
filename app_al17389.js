var http = require('http');
http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});

        res.end('Hola mundo node JS Repo GIT - Cortes Navarro Daniel Armando\n');
}).listen(8081);
console.log('Server running on part 8081');