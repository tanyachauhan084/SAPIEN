import mongoose from "mongoose"

const dbConnection= async()=>{
try{
   await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection was successful");
}

catch(error){
    console.log("connection failed, try sgain in some time later alright")
    process.exit(1);
}
}


export default dbConnection