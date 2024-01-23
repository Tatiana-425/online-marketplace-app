import React, { Component } from 'react';

export default class ProductforMainPart extends Component {
  state = {
    id: this.props.id,
    productName: this.props.productName,
    price: this.props.price,
    quantity: this.props.quantity,
    maxValue: this.props.maxValue
  };

  handleIncrement = () => {
    const { onIncrement } = this.props;
    // Update the local state and call the onIncrement function
    if (this.state.quantity < this.props.maxValue) {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => onIncrement(this.state.id));
    }
  };

  handleDecrement = () => {
    const { onDecrement } = this.props;
    // Update the local state and call the onDecrement function
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => onDecrement(this.state.id));
    }
  };

  handleAddToCart = () => {
    const { onAddToCart } = this.props;
    if (onAddToCart) {
      onAddToCart();
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className='col-lg-4'>
        <div className='card m-3'>
          <div className='card-body'>
            <div className="text-muted"> #{this.state.id}</div>
            <h5 className="pt-5 border-top">{this.state.productName}</h5>
            <div>${this.state.price}</div>
          </div>
          {/* the card body ends here */}
          <div className='card-footer'>
            <button
              className="btn btn-primary m-2 text-center"
              onClick={this.handleAddToCart}
            >
              <span>Add to the <br /> shopping cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
