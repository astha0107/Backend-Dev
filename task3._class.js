const fs=require("fs");
fs.copyFile("task1.txt","new_test.txt",(err)=>{
    if(err){
        console.log("error while file is copied",err)
    }else{
        console.log("file is copied successfully")
    }
})
// fs.copyFileSync("urgent.txt","desk.txt")
// console.log("file is copied")

fs.unlink("desk.txt",(err)=>{
    if(err){
        console.log("error while deleting files",err,err)
    }else{
        console.log("file is deletdd")
    }
})