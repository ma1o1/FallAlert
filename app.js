//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    
    if(request.url=='/burek'){
        console.log("Request handler random was called.");
         response.writeHead(200, {"Content-Type": "application/json"});
        var otherArray = ["item1", "item2"];
          var otherObject = { item1: "item1val", item2: "item2val" };
          var json = JSON.stringify({ 
            anObject: otherObject, 
            anArray: otherArray, 
            another: "item"
          });
          response.end(json);

    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});