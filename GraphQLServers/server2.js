import express from "express";
import bodyParser from "body-parser";
import "../envConfig.js";

const server2=express();

server2.use(bodyParser.json());

server2.get("/",(req,res,next)=>{
    
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({server:`GET RESPONSE:- GraphQL SERVER 2 on port ${process.env.GRAPHQL_SERVER2_PORT}`});
    },Math.random()*1000)
    
})

server2.post("/",(req,res,next)=>{
    
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        res.status(200).json({data:req.body,server:`POST RESPONSE :- GraphQL SERVER 2 on port ${process.env.GRAPHQL_SERVER2_PORT}`});
    },Math.random()*1000)

})

server2.listen(process.env.GRAPHQL_SERVER2_PORT,()=>{
    console.log(`GraphQL server 2 is listening at ${process.env.GRAPHQL_SERVER2_PORT}`);
})