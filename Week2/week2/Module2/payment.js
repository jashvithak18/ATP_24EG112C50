import{reduceStock}from './product.js';
import{getCartItems,getCartTotal,clearCart} from './cart.js';
import{applyDiscount} from './discount.js';
export function processPayment(paymentMethod,couponCode=null) {
  const items=getCartItems();
  if (items.length===0) {
    return {
      status:"failed",
      message:"Cart is empty"
    };
  }
  const subtotal=getCartTotal();
  const discountResult=applyDiscount(subtotal,couponCode,items);
  if (!validatePaymentMethod(paymentMethod)){
    return{
      status:"failed",
      message:"Invalid payment method"
    };
  }
  const status="success";
  if (status==="success"){
    items.forEach(item=>{
      reduceStock(item.id,item.quantity);
    });
    clearCart();
    return{
      orderId:generateOrderId(),
      items:items,
      subtotal:subtotal,
      discount:discountResult.discount,
      total:discountResult.finalTotal,
      paymentMethod:paymentMethod,
      status:"success",
      message:"Payment successful"
    };
  }
}
export function validatePaymentMethod(method){
  const validMethods=['card', 'upi', 'cod'];
  return validMethods.includes(method);
}
function generateOrderId() {
  return 'ORD'+Date.now();
}