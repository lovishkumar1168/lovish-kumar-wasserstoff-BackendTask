import express from "express";
import bodyParser from "body-parser";
import "../envConfig.js";

const server2=express();

server2.use(bodyParser.json());

server2.get("/",(req,res,next)=>{
    
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({server:`GET RESPONSE:- REST API SERVER 2 on port ${process.env.REST_API_SERVER2_PORT}`});
    },Math.random()*1000)

})

server2.post("/",(req,res,next)=>{
    
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({data:req.body,server:`POST RESPONSE :- REST API SERVER 2 on port ${process.env.REST_API_SERVER2_PORT}`});
    },Math.random()*1000)

})

server2.listen(process.env.REST_API_SERVER2_PORT,()=>{
    console.log(`REST API server 2 is listening at ${process.env.REST_API_SERVER2_PORT}`);
})