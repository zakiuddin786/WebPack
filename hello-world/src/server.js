const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs")

app.get("/",(req,res)=>{
    console.log("hitting the / route");
    const pathToHtmlFile = path.resolve(__dirname,"../dist/hello-world.html");
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(contentFromHtmlFile);
})

app.use("/",express.static(path.resolve(__dirname,"../dist")))

app.listen(9001,()=>{
    console.log(`Application running at http://localhost:9001/`)
})