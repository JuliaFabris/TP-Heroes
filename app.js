const express= require("express")
const path = require("path")
const app= express()



const publicPath=path.resolve(__dirname,"./public")

app.use(express.static(publicPath));

app.listen(3030, ()=>{
console.log("Servidor corriendo")
})
app.get("/", (req,res)=>{
res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get("/babbage", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/babbage.html"))
})

app.get("/berners-lee", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/berners-lee.html"))
})

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/clarke.html"))
    })
app.get("/babbage", (req,res)=>{
 res.sendFile(path.join(__dirname, "./views/hamilton.html"))
})
app.get("/berners-lee", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/hopper.html"))
})
app.get("/lovelace", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/lovelace.html"))
})

app.get("/touring", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/touring.html"))
})

