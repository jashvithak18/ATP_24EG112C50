//create http server
import exp from 'express'
const app=exp()
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
//use body parser middleware(in built)
app.use(exp.json())//takes req before it reaches actual route and extracts body of req object(json) and converts it into js object

//create custom middleware-sends res before route if any error or problem is there
function middleware1(req,res,next){
    //send res from middleware
   // res.json({message:"This res from middleware1"})
    console.log("Middleware1 executed")
    next();
}
function middleware2(req,res,next){
    //send res from middleware
    //res.json({message:"This res from middleware2"})
    console.log("Middleware2 executed")
    next();
}
function middleware3(req,res,next){
    //res.json({message:"This res from middleware3"})
    console.log("Middleware3 executed")
    next()
}
function middleware4(req,res,next){
    console.log("Middleware4 executed")
    next()
}
//use middleware
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.use(middleware4)
//frwd req to userApi if path starts with /user-api
app.use('/user-api',userApp)
//frwd req to productApi if path starts with /product-api
app.use('/product-api',productApp)
//set port number
const port=3000
app.listen(port,()=>console.log(`server listening to port ${port}...`))



