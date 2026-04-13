function Product(props){
    // state 
    const {productObj} = props
    // console.log(propsObj)
    //return a react element
    return(
        <div className="shadow-2xl shadow-orange-950 rounded-2xl gap-10 ring-4 bg-gradient-to-t from-amber-100 to-green-500">
            <h2 className="text-2xl p-3">{productObj.title}</h2>
            <p className="p-6">{productObj.description}</p>
        </div>
    )
}

export default Product