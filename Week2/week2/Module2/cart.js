import{getProductById,checkStock} from './product.js';
let cartItems=[];
export function addToCart(productId, quantity){
  const product=getProductById(productId);
  if(!product) 
     return "Product not found";
  if(!checkStock(productId,quantity))
    return "Not enough stock available";
  const item=cartItems.find(i=>i.productId===productId);
  if(item){
    item.quantity+=quantity;
  }else{
    cartItems.push({productId,quantity});
  }
  return "Item added to cart";
}
export function removeFromCart(productId){
  cartItems=cartItems.filter(item=>item.productId!==productId);
  return "Item removed from cart";
}
export function updateQuantity(productId,newQuantity) {
  const item = cartItems.find(i=>i.productId===productId);
  if(!item) 
    return "Item not in cart";
  if(!checkStock(productId,newQuantity))
    return "Not enough stock";
  item.quantity=newQuantity;
  return "Quantity updated";
}
export function getCartItems(){
  return cartItems.map(item =>
    {
    const product=getProductById(item.productId);
    return {
      id:product.id,
      name:product.name,
      price:product.price,
      quantity:item.quantity,
      total:product.price*item.quantity
    };
  });
}
export function getCartTotal(){
  return cartItems.reduce((total,item)=>{
    const product=getProductById(item.productId);
    return total+product.price*item.quantity;
  },0);
}
export function clearCart(){
  cartItems=[];
}