//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   Name: Abhishek Dilipkumar Nale
//   
//   Original:   
//   Date: 28/11/2024
//   
//   Exercise 2
//   Question 1: Create a Simple Web Server using Node.js to display “Hello World”
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http');

const server = http.createServer(function(req, res){
    res.write("Hello World..");
    res.end()
}).listen(8081);

console.log("Listing on port 127.0.0.1:8081");