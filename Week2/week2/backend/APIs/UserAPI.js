//create mini-express app(seperate route)
import exp from 'express'
export const userApp=exp.Router()

//test data(replace this test data with database)
let users=[]

//create user api(rest(represenational state transfer) api)

//route to handle GET req of client(http://localhost:3000/users)
userApp.get('/users',(req,res)=>{
    //read all users and send response
    res.json({message:"all users",payload:users})
    
})

//route to read user by id
userApp.get('/users/:id',(req,res)=>{
    //get user id from url parameter
    let idOfUrl=Number(req.params.id )
   //find user
   let user=users.find(userObj=>userObj.id===idOfUrl)
   //if user not found
   if(user===undefined){
    return res.json({message:"User not found"})
   }
    res.json({message:"user",payload:user})
})
//route to handle POST req of client
userApp.post('/users',(req,res)=>{
    //get user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //send res
    res.json({message:"User created"})
})
//route to handle PUT req of client
userApp.put('/users',(req,res)=>{
    //get modified user from client
    let modifiedUser=req.body;
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found
if(index==-1){
    return res.json({message:"User not found"})
}
    //update user with index
    users.splice(index,1,modifiedUser)
    //send res
    res.json({message:"User updated "})
})
//route to handle DELETE req of client
userApp.delete('/users/:id',(req,res)=>{
//get id of user from url parameter
let idOfUrl=Number(req.params.id )//returns object{id:3}
//find index of user
let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//if user not found
if(index==-1){
    return res.json({message:"User not found"})
}
//delete user by index
users.splice(index,1)
//send res
    res.json({message:"user removed"})
})