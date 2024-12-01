const express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')
const uc = require('/Node_js/Programs/p2_upperCase')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get("/", function(req,response){
    response.send(`<h1>choose the file</h1>
        <br>
        <form method="Post">
        <input type="file" name="f">
        <br>
        <button type="submit">Submit</button>`);
});

app.post("/", function(req,res){
    var file=req.body.f;

// Returs file discripter not data
    // fs.open(file,"r",function(err,data){
    //     if(err)
    //     {
    //         return res.status(404).send({message:"file not found"});
    //     }
    //     console.log("file reading: ",data.toString())

    fs.readFile(file,"utf-8",(err,data)=>{
        if(err)
        {
            return res.status(404).send({message: "File not found"})
        }
        console.log("contesnt of file: "+data);
        var str = uc.UpperCase(data)

            fs.writeFile("uppercase.txt",str,"utf-8",(err)=>{
                if(err)
                {
                    return res.status(404).send({message:"unable to write"});
                }
                console.log("wrriten");
            });
        });

   
}).listen(8081, (err)=>{
    if(err)
    {
        console.error(err);
        return false;
    }
    console.log("server running on http://127.0.0.1:8081")
    })