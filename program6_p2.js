
const http = require('http');
const toUC = require('./p2_upperCase');

const server = http.createServer(function(request, response){
    message = "Hello world abcdefghijklmnopqrstuvwxyz";
    message = toUC.UpperCase(message);

    response.write(message);
    response.end();

});

server.listen(3000, (err)=>{
    console.log("Server is running on http://127.0.0.1:3000")
    if (err)
    {
        console.log(err)
    }
})