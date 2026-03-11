//create mini-express app(seperate route)
import exp from 'express'
export const productApp=exp.Router()

//create product API with below operations
//create new product({productId,name,brand,price})
//read all products
//read all products by brand
//update a product
//delete a product by id

let products=[]

//read all products
productApp.get('/products',(req,res)=>{
    //read all products and send response
    res.json({message:"all products",payload:products})
    
})

//read all products by brand
productApp.get('/products/:brand',(req,res)=>{
    //get brand from url parameter
    let brand=Number(req.params.id )
   //find user
   let product=products.find(productObj=>productObj.id===brand)
   //if user not found
   if(product===undefined){
    return res.json({message:"Product not found"})
   }
    res.json({message:"product",payload:product})
})

//create a product
productApp.post('/products',(req,res)=>{
    const newProduct=req.body
    products.push(newProduct)
    res.json({message:"Product created"})
})

//update a product
productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body;
    let index=products.findIndex(productObj=>productObj.id===modifiedProduct.id)
if(index==-1){
    return res.json({message:"Product not found"})
}
    products.splice(index,1,modifiedProduct)
    res.json({message:"Product updated "})
})

//delete a product by id
productApp.delete('/products/:productId',(req,res)=>{
let id=Number(req.params.productId )
let index=products.findIndex(productObj=>productObj.id===id)
if(index==-1){
    return res.json({message:"Product not found"})
}
products.splice(index,1)
    res.json({message:"Product removed"})
})
