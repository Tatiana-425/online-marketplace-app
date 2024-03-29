import React, { Component } from "react";
import ProductforMainPart from "./ProductforMainPart";
import "font-awesome/css/font-awesome.css";

export default class ForHome extends Component {
  state = {
    products: [
      { id: 1, productName: "item 1", price: 700, quantity: 0, image: "https://media.istockphoto.com/id/1474579509/photo/contemporary-bed-isolated-on-white-background-front-view-include-clipping-path-close-up.jpg?s=2048x2048&w=is&k=20&c=zotOBU0ItuJRbTLy3TfFypgEt6pNmKfIXlW5xD5WMpU=" },
      { id: 2, productName: "item 2", price: 500, quantity: 0, image: "URL_FOR_ITEM_2_IMAGE" },
      { id: 3, productName: "item 3", price: 150, quantity: 0, image: "URL_FOR_ITEM_3_IMAGE" },
      { id: 4, productName: "item 4", price: 20, quantity: 0, image: "URL_FOR_ITEM_4_IMAGE" },
      { id: 5, productName: "item 5", price: 7, quantity: 0, image: "URL_FOR_ITEM_5_IMAGE" },
      { id: 6, productName: "item 6", price: 70, quantity: 0, image: "URL_FOR_ITEM_6_IMAGE" },
    ],
    shoppingCart: [], // Add a shopping cart state
  };

  handleIncrement = (product) => {
    const maxValue = 10;

    if (product) {
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);

      if (index !== -1 && allProducts[index].quantity < maxValue) {
        allProducts[index].quantity++;
        // Update the state
        this.setState({ products: allProducts });
      }
    }
  };

  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    // Check the index before updating the quantity
    if (index !== -1 && allProducts[index].quantity > 0) {
      allProducts[index].quantity--;
      // Update the state
      this.setState({ products: allProducts });
    }
  };

  handleAddToCart = (productId) => {
    const productToAdd = this.state.products.find(
      (product) => product.id === productId
    );

    this.setState((prevState) => ({
      shoppingCart: [...prevState.shoppingCart, { ...productToAdd, quantity: 1 }],
    }));
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>For Your Cozy Home</h1>
        <div className="row">
          {this.state.products.map((prod) => (
            <ProductforMainPart
              key={prod.id}
              id={prod.id}
              productName={prod.productName}
              price={prod.price}
              quantity={prod.quantity}
              image={prod.image} // Pass the image URL as a prop
              onIncrement={() => this.handleIncrement(prod)}
              onDecrement={() => this.handleDecrement(prod)}
              onAddToCart={() => this.handleAddToCart(prod.id)} // Added handler
              maxValue={10}
            >
              <button className="btn btn-primary m-2 text-right">
                <span onClick={() => { this.handleAddToCart(prod.id) }}>
                  Add to Shopping Cart
                </span>
              </button>
            </ProductforMainPart>
          ))}
        </div>
      </div>
    );
  }

  handleDelete = (productId) => {
    let allProducts = [...this.state.products];
    let index = allProducts.findIndex((product) => product.id === productId);
    if (window.confirm("Are you sure you want to delete?")) {
      // delete a product based on index
      if (index !== -1) {
        allProducts.splice(index, 1);
        // Update the state
        this.setState({ products: allProducts });
      }
    }
  };
}

