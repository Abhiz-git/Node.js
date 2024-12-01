const express = require('express');
const bodyparser = require('body-parser')


// server = http.createServer(function(request, response){
//     response.write()
// })

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

app.get("/", function(request, response){
    response.send(`<form name="input_file" method="Post">
        <h1> Select a file to upload </h1>
        <br><br>
        <input  type="file" name="fname">
        <br><br>
        <input type="submit" value="Upload">
        <br><br>
        </form>
    `);
});

app.post("/", function(request, response){
    const filenm = request.body.fname;
    response.send("File name is "+filenm);

});
app.listen(8081);
console.log("Server is running on http://127.0.0.1:8081");


