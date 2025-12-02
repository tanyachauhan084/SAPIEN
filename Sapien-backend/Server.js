import dotenv from "dotenv"
import App from "./App.js";
import dbConnection from "./db/database_connection.js";

dotenv.config();
const Port= process.env.PORT || 8000;

dbConnection()
.then(()=>{
    App.listen(Port, ()=>{
        console.log("App is working just fine yk yeahhhh yess")
    })
})

.catch((err)=>{
    console.log(err);
    
})

