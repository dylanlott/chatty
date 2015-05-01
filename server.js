var http = require('http'); 

var messages = []; 

var onRequest = function(req, res){
	if(req.method === 'GET') {
		res.writeHead(200, {
			'Connection': 'close', 
			'Content-Type': 'application/json', 
			'Access-Control-Allow-Origin': '*' 
		})
		res.end(JSON.stringify(messages));
	}

	else if(req.method === 'OPTIONS') {
		res.writeHead(200, {
			'Connection': 'close', 
			'Content-Type': 'application/json', 
			'Access-Control-Allow-Origin': '',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST', 
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		})
		res.end(); 
	}

	else if(req.method === 'POST'){
		var postData = ''; 
		req.on('data', function(chunk) {
			postData += chunk.toString(); 
		}); 
		req.on('end', function(){
			messages.push(JSON.parse(postData).message);
			res.end(JSON.stringify(messages))
		}); 
	}
}

http.createServer(onRequest).listen(8080); 
console.log("server running on port 8080 " + messages); 