var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;

    res.end("<html><body>Noticias: "+categoria+"</body></html>");


});

server.listen(3000);