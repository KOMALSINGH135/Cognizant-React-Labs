import React, { Component } from "react";

function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>

      <h3>Flight Details</h3>

      <ul>
        <li>Flight: AI-202</li>
        <li>From: Chennai</li>
        <li>To: Delhi</li>
        <li>Fare: ₹5000</li>
      </ul>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome back</h2>

      <h3>Flight Details</h3>

      <ul>
        <li>Flight: AI-202</li>
        <li>From: Chennai</li>
        <li>To: Delhi</li>
        <li>Fare: ₹5000</li>
      </ul>

      <button>Book Ticket</button>
    </div>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {

    let button;

    if (this.state.isLoggedIn) {
      button = (
        <LogoutButton
          onClick={this.handleLogout}
        />
      );
    } else {
      button = (
        <LoginButton
          onClick={this.handleLogin}
        />
      );
    }

    return (
      <div style={{ margin: "30px" }}>
        <Greeting
          isLoggedIn={this.state.isLoggedIn}
        />

        <br />

        {button}
      </div>
    );
  }
}

export default App;