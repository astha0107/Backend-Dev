const os=require("os");
const totalmem=os.totalmem()/(1024*1024*1024);
const freemem=os.freemem()/(1024*1024*1024);

const platform=os.platform();
const cpu=os.cpus()[0].model;
console.log(cpu);
os.userInfo();


setInterval(()=>{
    fs.appendFile("./system_info.txt",(err)=>{
        if(err){
            console.log(err);
        }
    })
},5000);
