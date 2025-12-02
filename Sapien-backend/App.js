import express from "express"

const App= express();

App.get("/", (req, res)=>{
res.status(200);
res.send("workingg");

})

App.get("/home" , (req, res)=>{
    res.status(200);
    res.send("Everything is good here");
})

export default App;