const express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/", function(req,response){
    response.send(`
        <form method="Post">
        <h1> content </h1>
        text <input type="textarea" name="ta">
        <input type="submit" >
        </form>
        `);
});
app.post("/", function(request, response){
   var content = request.body.ta

   fs.writeFileSync("content.txt", content, "utf-8", function(err, data){
    if(err)
    {
        console.error(err);
        return false
    }
   })
   response.send("written")
});

app.listen(8081, function(err){
    if(err)
    {
        console.error(err)
    }
    console.log("server running on http://127.0.0.1:8081")
});


