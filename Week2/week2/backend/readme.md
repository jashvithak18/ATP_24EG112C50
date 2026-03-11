steps to create backend
1.Generate package.json file
npm init -y
change description,main
change type to js

2.create http server
-install express module(downloads from node js library to our application)
npm install express
-import express module
-create new file server and import exp from 'express' since express is already a part of node_modules there is no need to give full path
-*user variable name app to hold express application
-express  application internally contains http server
-set port no and assign port no to http server using listen() method

//postman,restclient are used to test backend

evertime we make changes to code-server should be restarted
**nodemon is used t restart server automatically

//get req and delete req do not support body
http://localhost:3000/users/idno  deletes particular idno

***
//post req and put req should send data to api as body of the req obj
//get and delete reqs do not support body of the req objs,so these 2 reqs can send data through end point


3.Create rest APIs
resource based operations

http://localhost:

4.add middlewares




