# intelligent load balancer for multi-api management

# files:-

1. server.js:- this is load balancer server
2. loadbalncer.js:- logic for selecting server based on round robin method
3. RestAPIServers/server1.js:- for restapi server1 logic
4. RestAPIServers/server2.js:- for restapi server2 logic
5. GraphQLServers/server1.js :- for graphQl server1 logic
6. GraphQLServers/server2.js :- for graphQl server2 logic

# steps:-

1. creating a load balancer server
2. creating 2 servers for rest api type server
3. creating 2 servers for garphql apitype server
4. selecting server based on round robin method
5. create FIFO queue for rest api type
6. create priorty queue for graphQl api type
7. logging request,response,method,url,etc. using winston logger
8. define apitype,priorirty in header

you can set up project on local by running commands

1. npm i (for instaling dependencies)
2. node server.js (as server.js is entry point of this project)

Note:- you can use environment variable by creating your own .env file on your local and write

for example:-

1. PORT = 8000
2. REST_API_SERVER1_PORT = 3001
3. REST_API_SERVER2_PORT = 3002
4. GRAPHQL_SERVER1_PORT = 3003
5. GRAPHQL_SERVER2_PORT = 3004
