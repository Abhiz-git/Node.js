const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    port: "8080",
    database: "mydb"
});

conn.connect(function(err){
    if(err)
    {
        return console.error(err)
    }
    console.log("Database Connected");
    
    const querry=[
        "SELECT*FROM student",
        "INSERT INTO student(rno,name,address) VALUES ((1,'abhi','phaltan'), (2,'avi','rajisthan'))"
    ]

    querry.forEach(querry => {
        conn.query(querry, function(err,result){
            if(err)
            {
                return console.error(err);
            }
            console.log("Querries excuted");
            console.log(result);
        });
    })
    

})


