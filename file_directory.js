const fs=require("fs");
//fs.mkdir ek callback func hai aur usko callback chaiye lekin hamne nhi diya isley phle error aa rha tha when we only wrote fs.mkdir("new Directory")
fs.mkdir("newDirectory",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("directory created")
    }
})
fs.mkdir("folders/folder1/folder2",{recursive:true},(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("directory is created");
})

//for reading the directory we will use below func
fs.readdir("newDirectory",(err,files)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("files",files)
})

//for removing the directory
fs.rmdir("newDirectory",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("directory is removed");
})
//for deleting the file in directory
fs.rm("newDirectory",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("directory is removed");
})