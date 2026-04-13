-Client side application and sever side application can interact with each other over http prrotocal by making http req and receiving http res.
-To make http req from client side application,one can use either fetch function or axios module(throws error directly to catch).

The following are the http req types:
GET-To read all resources
POST-To create a new resource
PUT-To update entire resource
DELETE-To delete a resource
PATCH-To update a resource partially
-The POST,PUT & PATCH req types can have body property which can hold json data,whereas GET & DELETE reqs do not have body so they can send data through url.
-when making req from frontend we have to take care of body,content type and API end point.

GET
-fetch(endpoint,{method:"GET"})
-axios.get(endpoint)

POST
-fetch(endpoint,{method:"POST",headers:{"Content-Type":app/json}}
body:JSON.stringfy(resource)
)
-axios.post(endpoint,resource)

PUT
-fetch(endpoint,{method:"PUT",headers:{"Content-Type":app/json}}
body:JSON.stringfy(resource)
)
-axios.put(endpoint,resource)

# state management
sharing state + keeping state sync across app
we can use context-api(small apps),redux/zustand(large apps)

# context api
-create context obj(pipeline)
-add state to context object(add water to pipline)
-set this context provider to a parent
-consume context from components