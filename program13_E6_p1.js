const eventEmiter = require('events').EventEmitter;

function LoopProcessor(num)
{
    const event = new eventEmiter()

    setTimeout(function(){
        for(var i=1;i<=num;i++)
        {
            event.emit("BeforeProcess",i)
            console.log("Processing Number: ",i)
            event.emit("AfterProcess",i)

        }
    },3000);
    return event
}

var lp = LoopProcessor(3);

lp.on("BeforeProcess", function(data){
    console.log("About to start the process for "+data)
});

lp.on("AfterProcess", (data)=>{
    console.log("Complete Processing: "+data)
})

