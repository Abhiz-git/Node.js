const express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/", function(req,res){
    res.send(`<form name="file_download" method="post">'
    '<h3>Click the button to Download the File "download.txt" <h3>'
    <input type="file" name="fname"><br>'
    <button type="submit">Download</button><br>'
    </form>`)
});

app.post("/", function(request,response){

    const fn=request.body.fname

    response.download(fn)

});

app.listen(8081, (err)=>{
    if(err)
    {
        console.error(err)
    }
    console.log("server is running on http://127.0.0.1:8081")
});