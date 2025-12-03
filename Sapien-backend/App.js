import express from "express"
import cors from "cors"
import errorMiddleware from "./middleware/error.middlerware.js";


const App= express();

//basic middleware
App.use(express.json({limit:"16kb"}));
App.use(express.urlencoded({extended:true, limit:"16kb"}));
App.use(express.static("public"));

//cors configure
App.use(cors({
    origin: process.env.CORS_ORIGIN || `http://localhost:${process.env.PORT}`,
    credentials:true,
    methods:  ["GET", "POST", "UPDATE", "PUT", "PATCH", "UPDATE"],
    allowedHeaders: ["Authorization", "Content-type"],

}))



App.use(errorMiddleware);

App.get("/", (req, res)=>{
res.status(200);
res.send("workingg");

})
import healthcheckroute from "./Routes/healthcheck.routes.js";
App.use("/api/v1/healthcheck", healthcheckroute)


App.get("/home" , (req, res)=>{
    res.status(200);
    res.send("Everything is good here");
})

export default App;