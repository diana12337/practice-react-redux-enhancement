import React from "react";
import Timer from "../components/Timer";

class TimerContainer extends React.Component {
  state = {
    time: 0,
  };

  getHours() {
    let hours = Math.floor(this.state.time / 3600);
    return hours;
  }

  getMinutes() {
    let min = Math.floor((this.state.time % 3600) / 60);
    return min;
  }

  getSeconds() {
    let sec = this.state.time % 60;

    return sec;
  }

  render() {
    return (
      <Timer
        getHours={this.getHours()}
        getMinutes={this.getMinutes()}
        getSeconds={this.getSeconds()}
      />
    );
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((state) => {
        return { time: state.time + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}

export default TimerContainer;
