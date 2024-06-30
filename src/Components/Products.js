import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import totalPrice from "./TotalPrice";
import { Image } from "react-bootstrap";
import TotalPrice from "./TotalPrice";


const Products = ({setFinalPrice, setTotal}) => {
 
  const [open, setOpen] = useState(false);
  const [selectColor, setSelectColor] = useState({});
  

  {/*Ten products items stored in array object to be displayed*/}
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description of Product 1",
      price: 10,
      imageUrl: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description of Product 2",
      price: 20,
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Black", "White", "Yellow"],
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description of Product 3",
      price: 15,
      imageUrl: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Purple", "Orange", "Pink"],
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description of Product 4",
      price: 25,
      imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Brown", "Gray", "Cyan"],
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description of Product 5",
      price: 30,
      imageUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Lime", "Teal", "Magenta"],
    },
    {
      id: 6,
      title: "Product 6",
      description: "Description of Product 6",
      price: 40,
      imageUrl: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Gold", "Silver", "Bronze"],
    },
    {
      id: 7,
      title: "Product 7",
      description: "Description of Product 7",
      price: 35,
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Turquoise", "Indigo", "Slate"],
    },
    {
      id: 8,
      title: "Product 7",
      description: "Description of Product 7",
      price: 35,
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Turquoise", "Indigo", "Slate"],
    },
    {
      id: 9,
      title: "Product 7",
      description: "Description of Product 7",
      price: 35,
      imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colorOptions: ["Turquoise", "Indigo", "Slate"],
    },
  ];

  function handleBuyClick(price){
   setFinalPrice((finalPrice)=>finalPrice + price);
   setTotal(true)
  };

  const toggleBuyClick = (id) => {
    setOpen(open === id ? null:id) 
  }

  const colorChanged = (item , color) =>{
    
   setSelectColor((oldColor) =>({...oldColor,[item]:color}))
   setOpen(false)
  }

  return (
    <div>
            {/*navigation menu component will appears on every page of 
application. */}
      
     

      <h1>Our Products</h1>
      <div className="row">
        {/*map method used to render each product  by styling eat with bootstrap*/}
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    onClick={() => toggleBuyClick(product.id)} // Toggle dropdown visibility on button click
                    aria-expanded={open === product.id ? "true" : "false"} // Set aria-expanded attribute based on dropdown visibility
                  >
                    <p style={{color:selectColor[product.id]}}>{selectColor[product.id] || "Color Options"}</p>
                  </button>
                  {/*Each image with three colors options by using dropdown button*/}
                  <ul className={`dropdown-menu${open === product.id ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                    {product.colorOptions.map((color, index) => (
                      <li key={index}>
                        <button className="dropdown-item"  onClick={() => colorChanged(open , color)}>
                          {color}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/*Buy button to be clicked, the total price component should be
updated to display the total price of all purchased products. */}
                <button
                  onClick={()=> handleBuyClick(product.price)} 
                  className="btn btn-primary"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;