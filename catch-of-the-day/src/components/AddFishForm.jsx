import React, { Component } from "react";

class AddFishForm extends Component {
  state = {};
  //create refs to access input elements
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  //turn all inputs in property/value of fish object
  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: Boolean(this.statusRef.value.value),
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    //reset form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="NAME" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="PRICE"
        />
        <select name="status" ref={this.statusRef}>
          <option value="true">Fresh!</option>
          <option value="false">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="DESC" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="IMAGE"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
