const cal = require('./E2p4_cal')
const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({

    extended:true
}));
app.use(bodyparser.json());

app.get("/", function(request, response){
    response.send(`<form name="calculator" method=Post>
        <h1> Calculator accepting 2 nos. </h1>
        <br><br>
        Num1: <input type="text" name="no1">
        Num2: <input type="text" name="no2">
        <br><br>
        <button type="submit">Cal</button>
        `)
});

app.post("/", function(request,response){
    var x = parseInt(request.body.no1);
    var y = parseInt(request.body.no2);

    response.write("<br>Addition is :"+cal.Addition(x,y));
    response.write("<br>Subtraction is :"+cal.Subtraction(x,y));
    response.write("<br>Multiplication is :"+cal.Multiplication(x,y));
    response.write("<br>Division is :"+cal.Division(x,y));
});

app.listen(8081, (err)=>{
    console.log("server is running on http://127.0.0.1:8081");
    if(err)
    {
        console.log(err);
    }
})


console.log("addition is: "+cal.Addition(1,2))