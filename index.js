// index.js
var restify = require('restify');
var monitoringController = require('./monitoringController.js');

var server = restify.createServer({
    name: 'SIGO monitoring is running'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());

/*---- SERVER ROUTES ----*/
server.get('/monitors', monitoringController.monitoring);


/*---- LISTENING ----*/
server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});