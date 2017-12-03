var http = require('http');
 
var s = http.createServer(function(request, response) {
  // Website you wish to allow to connect
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.writeHead(200);
  str="Заголовок 1,Тело 1";
  for (i=2;i<6;i++){
    str+=",Заголовок "+i+",Тело "+i;
  }     
  str+="&2&-1";      
  response.write(str);
  response.end();
});
 
s.listen(8079);
 
console.log("Listening on http://127.0.0.1:8079/");