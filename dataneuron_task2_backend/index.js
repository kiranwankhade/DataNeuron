const express =  require("express");
const { connection } = require("./db");

require('dotenv').config()

const app = express();
app.use(express.json());

var cors = require('cors');
const { taskRouter } = require("./Routes/Task.routes");
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/task",taskRouter)

app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("connection");
     }catch(err){
        console.log("not connected");
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.port}`)
})