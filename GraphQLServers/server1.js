import express from "express";
import bodyParser from "body-parser";
import "../envConfig.js";

const server1=express();

server1.use(bodyParser.json());


server1.get("/",(req,res,next)=>{
   
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({server:`GET RESPONSE:- GraphQL SERVER 1 on port ${process.env.GRAPHQL_SERVER1_PORT}`});
    },Math.random()*1000)

})

server1.post("/",(req,res,next)=>{
   
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({data:req.body,server:`POST RESPONSE :- GraphQL SERVER 1 on port ${process.env.GRAPHQL_SERVER1_PORT}`});
    },Math.random()*1000)

})

server1.listen(process.env.GRAPHQL_SERVER1_PORT,()=>{
    console.log(`GraphQL server 1 is listening at ${process.env.GRAPHQL_SERVER1_PORT}`);
})