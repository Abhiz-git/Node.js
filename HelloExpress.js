const express = require('express')

const app = express();

app.get("/", function(req, response){
    response.end('<h1 align="center">Jay Ganesh...Hello Express</h1>')

}).listen(8081, (err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("server is running on http://127.0.0.1:8081")
});