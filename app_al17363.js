var http = require('http');
http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

        var odjeto = {
        mensaje :'Hola mundo node JS Repo GIT - Pereida Morones Jesus manuel\n'
        };

        var json = JSON.stringify(objecto);

     res.end(json);

}).listen(8081);
console.log('Server running on part 8081');