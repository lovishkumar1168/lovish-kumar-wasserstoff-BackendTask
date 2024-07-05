import express from "express";
import bodyParser from "body-parser";
import "../envConfig.js";

const server1=express();

server1.use(bodyParser.json());


server1.get("/",(req,res,next)=>{
   
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        const serverResponse = `GET RESPONSE:- GraphQL SERVER 1` +
            ((process.env.GRAPHQL_SERVER1_URL && ` on ${process.env.GRAPHQL_SERVER1_URL}`) ||
            (process.env.GRAPHQL_SERVER1_PORT && ` on port ${process.env.GRAPHQL_SERVER1_PORT}`));

        res.status(200).json({server:serverResponse});
    },Math.random()*1000)

})

server1.post("/",(req,res,next)=>{
   
    /* responding to request between 0 to 1000ms */
    setTimeout(()=>{
        const serverResponse = `POST RESPONSE :- GraphQL SERVER 1` +
            ((process.env.GRAPHQL_SERVER1_URL && ` on ${process.env.GRAPHQL_SERVER1_URL}`) ||
            (process.env.GRAPHQL_SERVER1_PORT && ` on port ${process.env.GRAPHQL_SERVER1_PORT}`));

        res.status(201).json({data:req.body,server:serverResponse});
    },Math.random()*1000)

})

server1.listen(process.env.GRAPHQL_SERVER1_PORT,()=>{
    console.log(`GraphQL server 1 is listening at ${process.env.GRAPHQL_SERVER1_PORT}`);
})