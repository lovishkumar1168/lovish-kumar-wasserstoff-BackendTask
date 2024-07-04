import axios from "axios";
import { getServer } from "./loadBalancer.js";
import { logger } from "./winstonLogger.js";
import { PriorityQueue } from "./PriorityQueue.js";

export const processQueue=async(queue,apiType)=>{

    let priority=0;
    let request;
    
    /* if queue is PriorityQueue */
    if(queue instanceof PriorityQueue)
    {
        request=queue.dequeue();
        priority=request.priority;
    }

    /* if queue is FIFOQueue */
    else
    {
        request=queue.shift();
    }
    let{req,res}=request;

    const url= getServer(apiType,priority); //selecting server (getting localhost url)

    try{
        const requestTime = Date.now();  //request time
        
        const response=await axios({
            method:req.method,  // it can be of get or post type      
            url,
            data:req.body,
        })

        // calculate response time and time taken for logging it
        const responseTime=Date.now();
        const timeTaken=responseTime-requestTime;

        // creating logbody and logging it.
        const logBody= `url: ${url}, ,method: ${req.method} , server: ${response.data.server}, requestTime: ${requestTime}ms, responseTime: ${responseTime}ms, timeTaken:${timeTaken}ms`;
        logger.info(logBody);
      
        res.status(response.status).send(response.data);
    }
    catch(err)
    {
        console.error(err);
    }
}