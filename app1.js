const express=require("express");
require("./donation")
const app=express();
const body1=require('body-parser');
const Student1=require("./donation");
const encoded=body1.urlencoded({extended:false})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/donation.html')

})

app.post('/donation',encoded,async(req,res)=>{
    let student=await Student1(req.body);
    student.save()
    .then(()=>{
        res.send(`<h2>User Registration</h2>
        <p>Click <a href="/login">here</a> to login or click <a href="/">to refresh</a>`);
    })
    .catch(err=>console.error(err))
})


    app.get('/dashboard',(req,res) => {
        res.redirect('http://127.0.0.1:5500/index.html');
    })

    app.listen(9000,()=>{
        console.log("Server is running at port 3000");
    })
