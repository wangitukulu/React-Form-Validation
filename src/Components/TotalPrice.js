import React from "react"


{/*  define an <h2> tag that says,
“Total price: ” – This will be used to display the total price of both products.*/}


export default function TotalPrice(props) {
    return (
        <>
        {/* the prop final Price will display the price of both products*/}
            <h2>Total price:{props.finalPrice}</h2>
        
        </>
    )
}