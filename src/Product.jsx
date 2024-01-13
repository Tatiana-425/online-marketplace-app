import React, {Component} from 'react';

export default class Product extends Component {
    state={
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

render(){
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
                <div className='float-left'>
                    <span className='badge badgeforquantity m-2'>{this.state.quantity}</span>
                    <div className='btn-group'>
                        <button 
                        className="btn btn-outline-success" 
                        onClick={this.handleIncrement}
                        >
                            +
                            </button>
                        <button 
                        className="btn btn-outline-success" 
                        onClick={this.handleDecrement}
                        >
                            -
                            </button>
                    </div>
                </div>
                <div className='float-left'>
                {this.props.children && this.props.children.find(child => child.type === 'button' && child.props.className === 'btn btn-primary m-3 text-left')}
                </div>
                <button
                 className="btn btn-secondary m-2 text-right delete-button"
                 onClick={() => this.props.onDelete(this.state.id)}
                >
  <i className="fa fa-times"></i>
  <span>Delete</span>
</button>


            </div>
        </div>
        </div>
        )
}
}