import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      amount: "",
      currency: "Euro"
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  increaseAndHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = (this.state.amount / 90).toFixed(2);

    alert(
      `Converting to Euro Amount is € ${euro}`
    );
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>

        <h2>{this.state.count}</h2>

        <button onClick={this.increaseAndHello}>
          Increment
        </button>

        <br /><br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() =>
            this.sayWelcome("Welcome")
          }
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <hr />

        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>

          <label>Amount: </label>

          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <br /><br />

          <label>Currency: </label>

          <input
            type="text"
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default App;