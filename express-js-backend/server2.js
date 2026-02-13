import express from 'express';
const app=express();
const PORT=5000;

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
const students=[
    {id: 1, name:"raj", branch:"CSE"},
    {id: 2, name:"Ajay", brnach:"ECE"},
    {id:3 , name:"Yash", branch:"IT"},

];
app.get("/",(req,res)=>{
    // console.log("form",req.body);
    // res.send("registered");
    res.render("form",{allStudents: students});
});

app.post("/students/register",(req,res)=>{
    console.log("form data:",req.body);
    // students.push(req.body)
    // res.redirect("/");
    res.send("registered");
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});