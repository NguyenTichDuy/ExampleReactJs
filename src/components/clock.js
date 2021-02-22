import React from "react";
import Test from "./test";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1> It is {this.state.date.toLocaleTimeString()} </h1>
        <Test />
      </div>
    );
  }
}
