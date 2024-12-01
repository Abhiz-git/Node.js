const mysql = require('mysql')

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    port: "8080"            //default
});

con.connect(function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log("Connected")

    con.query("CREATE DATABASE mydb", function(err, result){
        if(err)
        { 
            return console.error(err)
        }
        console.log("Database Created")

    var sql = "CREATE TABLE student(rno int PRIMARY KEY, name varchar(59), dob date, address varchar(255))"

    con.query(sql, (err,result)=>{
        if (err)
        {
            return console.err(err)
        }
        console.log("Table created")
    })
    });
});