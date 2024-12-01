const express = require('express');
const bodyparser = require('body-parser');

const app = express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get("/", function(req,response){
    response.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Form</title>
        </head>
        <body>
        <form name="login" onsubmit="return validate(event)" method="post">
        <h1>Logging Form</h1>
        Name: <input type="text" id="name" name="name">
        <br><br>
        Password: <input type="text" id="pass" name="pass" required>
        <br><br>
        <button type="submit">Submit</button>
        </form>

        <script>
            document.addEventListener("DOMContentLoaded",function(){
                function validate(event)
                {
                    let name = document.getElementById('name').value.trim();
                    let pwd =  document.getElemetById('pass').value;

                    let patt = /^[a-zA-Z.]+$/;

                    if(!patt.test(name) || name === "")
                    {
                        event.preventDefault();
                        alert("Name must be only alphabetic and required");
                        return false;
                    }          
                    
                    alert("Logged In");
                    return true;
                }
                document.querySelector("form").onsubmit = validate;
            });
        </script>
        </body>
        </html>
        
        `);
});

try{
    app.post("/", function(request, response){
        var name = request.body.name;
        var pass = request.body.pass;

        if(pass == 12345)
        {
            response.send("Logging Successfull...");
        }
        else{
            response.send("Logging Unsuccefull...")
        }
        });
        
    }
    catch(err){
        response.send("Logging Unsucessfull...\n",err)
    }
       
    

app.listen(8081, (err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("server running on http://127.0.0.1:8081");
});