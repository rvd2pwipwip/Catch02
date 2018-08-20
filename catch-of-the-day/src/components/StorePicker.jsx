import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef(); //create a ref to access the <input/> element
  //set method as a property to bind this on StorePicker
  goToStore = e => {
    //pass event argument
    //1. stop the form from submitting
    e.preventDefault();
    //2. get the text from the input (with a ref)
    const storeName = this.myInput.value.value;
    // console.log(storeName);
    //3. change page to /store/:captured_input
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
