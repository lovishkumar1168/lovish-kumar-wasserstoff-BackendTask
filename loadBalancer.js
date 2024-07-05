
//defing urls for rest servers
const restServers=[
    `http://localhost:${process.env.REST_API_SERVER1_PORT}`,
    `http://localhost:${process.env.REST_API_SERVER2_PORT}`
]

//defing urls for GraphQL servers
const graphqlServers=[
    `http://localhost:${process.env.GRAPHQL_SERVER1_PORT}`,
    `http://localhost:${process.env.GRAPHQL_SERVER2_PORT}`,
]

// initailising index for both servers
let restServerIndex=0;
let graphqlServerIndex=0;


/* method for selecting server based on round robin method */
export const getServer=(apiType,priority)=>{

    if(apiType=='REST')
    {
        const restServer=restServers[restServerIndex];  //selecting url 
        restServerIndex=(restServerIndex+1)%restServers.length;  // increment restServerindex and make sure it stays within the length of restServers
        return restServer;
    }
    else if(apiType=='GraphQL')
    {
        let graphqlServer;
        if(priority==0)
        {
            graphqlServer=graphqlServers[graphqlServerIndex]; // selecting server based on round robin
            graphqlServerIndex=(graphqlServerIndex+1)%graphqlServers.length; // increment graphQlServerindex and make sure it stays within the length of graphqlServers
        }
        else
        {
            graphqlServer=graphqlServers[(priority - 1) % graphqlServers.length];  // selecting url based on priority
        }
        return graphqlServer;
    }
}