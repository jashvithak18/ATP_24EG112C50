function Product(props){
    const {productObj}=props;
    return(
        <div>
            <h2 className="text-2xl text-emerald-950">{productObj.title}</h2>
             <p>{productObj.image}</p>
            <p>${productObj.price}</p>
             <p>{productObj.description}</p>
             
        </div>
    )
    
}
  
export default Product;