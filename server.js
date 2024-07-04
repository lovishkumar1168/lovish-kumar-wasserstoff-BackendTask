import express from "express";
import "./envConfig.js";
import bodyParser from "body-parser";
import { processQueue } from "./processQueue.js";
import { PriorityQueue } from "./PriorityQueue.js";


const server=express();

server.use(bodyParser.json());

const fifoQueue = [];   //REST API type adds here
const priorityQueue = new PriorityQueue();  //GraphQL API type adds here


/* listen for every api request */

server.use(async (req,res,next)=>{
    const apiType=req.headers['api-type']; // read apitype from header
    const priority=req.headers['priority'] || 0; // read priority from header

    if(apiType!='REST' && apiType!='GraphQL')  // if apitype is not of REST and GraphQL so it is invalid type
    {
        res.status(400).send('invalid api type');
        return;
    }

    const request = { req, res };  // creating a request object for request and response
    if(apiType=="REST")
    {
        fifoQueue.push(request);  // push request in fifoqueue
    }
    else
    {
        priorityQueue.enqueue(request,priority); // push request in PriortyQueue
    }
})


/* PROCESS QUEUE AFTER EVERY 100ms */

setInterval(()=>{
    if(fifoQueue.length>0)
    {
        processQueue(fifoQueue,"REST"); // PROCESS FIFO QUEUE AND API TYPE IS REST
    }
    if(priorityQueue.length()>0)
    {
        processQueue(priorityQueue,"GraphQL"); // PROCESS PRIORIRTY QUEUE AND API TYPE IS GraphQL
    }
      
},100)


/* load balancer server */

server.listen(process.env.PORT,()=>{
    console.log(`load balancer is listening at ${process.env.PORT}`);
})