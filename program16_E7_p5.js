const express = require("express")
const bodyparser = require('body-parser')
const mysql = require("mysql")

const app = express()

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/", function(req,res){
    res.send(`
        <form method="Post">
        <h1>Enter student Name to get detail</h1>
        <br><br>
        <input type="text" name="name">
        <br><br>
        <input type="submit" value="Submit">`);
});

app.post("/", function(req,res){
    var nm = req.body.name;

    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: "3306"
    });

    conn.connect(function(err){
        if (err)
        {
            res.send("Connection failed...")
            return console.error(err)
        }
        console.log("Connection successfull...");
        res.send("Connected...")

        conn.query("CREATE DATABASE IF NOT EXISTS nodeDB", function(err,result){
            if(err)
            {
                console.error(err);
                response.send("<h6>cannot create db</h6>")
                return
            }
            console.log("Database Created...");
            res.send("Database Created...");

            var sql=["USE nodeDB",
                "INSERT TABLE details( rollno int PRIMARY KEY, name varchar(50), address varchar(255)",
            "INSERT INTO details(rollno, name, address) VALUES (1,'abhi','phaltan'),(2,'avi','satara'),(3,'sarth','dehu');",
            ];

            sql.forEach(sql=>{
                conn.query(sql,function(err,result){
                    if(err)
                        {
                            console.error(err);
                            response.send("<h6>cannot create db</h6>")
                            return
                        }
                    console.log(" Created...");
                    res.send("Created...");
                });
                conn.query("Select * from details where name='"+nm+"'", function(err,result){
                    if(err)
                        {
                            console.error(err);
                            response.send("<h6>cannot create db</h6>")
                            return
                        }
                    console.log(" Created...")
                    console.log(result);
                    res.send("Created...");
                });
            })

        });
    });
});

app.listen(8081, (err)=>{
    if(err)
    {
        return console.error(err)
    }
    console.log("server is running on http://127.0.0.1:8081");
})