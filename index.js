// index.js
var restify = require('restify');
var monitoringController = require('./monitoringController.js');
const corsMiddleware = require('restify-cors-middleware');


var server = restify.createServer({
    name: 'SIGO monitoring is running'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());

server.get('/monitors', monitoringController.monitoring);

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['*']
})
 
server.pre(cors.preflight)
server.use(cors.actual)

server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});