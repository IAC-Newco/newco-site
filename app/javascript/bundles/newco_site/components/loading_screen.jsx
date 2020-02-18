import React, { Component } from "react";

// images
import Logo from "images/logo.png";
import Shape1 from "images/loading_screen/shape1.png";
import Shape2 from "images/loading_screen/shape2.png";
import Shape3 from "images/loading_screen/shape3.png";
import Shape4 from "images/loading_screen/shape4.png";
import Shape5 from "images/loading_screen/shape5.png";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPercent: 0
    };
  }

  incrementLoadingPercent() {
    const { loadingPercent } = this.state;
    let increment;

    if (loadingPercent < 85) {
      increment = 1;
    } else if (loadingPercent < 92) {
      increment = 0.5;
    } else if (loadingPercent < 97) {
      increment = 0.25;
    } else if (loadingPercent < 100) {
      increment = 0.125;
    } else {
      increment = 1;
    }

    this.setState({ loadingPercent: this.state.loadingPercent + increment });
  }

  render() {
    const loadingPercent =
      this.state.loadingPercent > 100
        ? 100
        : Math.floor(this.state.loadingPercent);

    return (
      <div className="loading-screen">
        <div className="loading-screen__shapes-container">
          <img
            className="loading-screen__shape loading-screen__shape--1"
            src={Shape1}
          />
          <img
            className="loading-screen__shape loading-screen__shape--2"
            src={Shape2}
          />
          <img
            className="loading-screen__shape loading-screen__shape--3"
            src={Shape3}
          />
          <img
            className="loading-screen__shape loading-screen__shape--4"
            src={Shape4}
          />
          <img
            className="loading-screen__shape loading-screen__shape--5"
            src={Shape5}
          />
        </div>
        <div className="loading-screen__percent">{loadingPercent}</div>
      </div>
    );
  }

  componentDidMount() {
    const that = this;
    function timer() {
      if (that.state.loadingPercent > 100) {
        if (that.state.loadingPercent > 150) {
          clearInterval(interval);
          // that.props.completeLoading();
        } else {
          that.incrementLoadingPercent();
        }
      } else {
        that.incrementLoadingPercent();
      }
    }

    const interval = setInterval(timer, 37.5);
  }
}

export default LoadingScreen;
