const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Some content will be sent")
})

app.listen(3000,()=>{
    console.log(`Application running at http://localhost:3000/`)
})