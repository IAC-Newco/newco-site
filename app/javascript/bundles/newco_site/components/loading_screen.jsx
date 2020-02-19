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

    this.incrementLoadingPercent = this.incrementLoadingPercent.bind(this);
  }

  incrementLoadingPercent() {
    const { loadingPercent } = this.state;
    let increment;

    if (loadingPercent < 50) {
      increment = 1.5;
    } else if (loadingPercent < 85) {
      increment = 1;
    } else if (loadingPercent < 100) {
      increment = 0.5;
    } else {
      increment = 1.5;
    }

    this.setState(
      { loadingPercent: this.state.loadingPercent + increment },
      () => {
        if (this.state.loadingPercent > 100) {
          if (this.state.loadingPercent > 160) {
            this.props.completeLoading();
          } else {
            window.requestAnimationFrame(this.incrementLoadingPercent);
          }
        } else {
          window.requestAnimationFrame(this.incrementLoadingPercent);
        }
      }
    );
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
    window.requestAnimationFrame(this.incrementLoadingPercent);
  }
}

export default LoadingScreen;
