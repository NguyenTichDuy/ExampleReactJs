import LogginButton from "./Logging/Login";
import LoggoutButton from "./Logging/Logout";
import React from "react";
import Greeting from "./Rendering";
export default class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoggoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LogginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
