import{getAllProducts,searchProducts,getProductsByCategory} from './product.js';
import{addToCart,getCartItems,getCartTotal,updateQuantity,removeFromCart} from './cart.js';
import{processPayment} from './payment.js';
//Browse products
console.log('All Products:');
console.log(getAllProducts());
//Search
console.log('Searching for "phone":');
console.log(searchProducts('phone'));
//Add to cart
console.log('Adding to Cart');
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));
//View cart
console.log('Current Cart');
console.log(getCartItems());
console.log("Cart Total:",getCartTotal());
//Update quantity
console.log(' Updating Quantities');
console.log(updateQuantity(1, 2));
//Remove item
console.log('Removing Item');
console.log(removeFromCart(3));
//View updated cart
console.log('Updated Cart');
console.log(getCartItems());
console.log("Cart Total:",getCartTotal());
//Checkout
console.log('Checkout');
const order = processPayment('upi','WELCOME10');
console.log(order);