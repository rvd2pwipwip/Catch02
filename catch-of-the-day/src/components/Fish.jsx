import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Fish extends Component {
  state = {};
  render() {
    const { image, name, desc, price, status } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Order</button>
      </li>
    );
  }
}

export default Fish;
