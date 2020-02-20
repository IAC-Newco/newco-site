import React, { Component } from "react";
import $ from "jquery";
import curDot from "../utils/cursor_dot";

// React.js components
import LoadingScreen from "./loading_screen";
import NewcoTeamOf from "./newco_team_of";

// data
import { startingPositions } from "../data/shapes_starting_positions";

// images
import Logo from "images/logo.png";
import Shape1 from "images/shapes/shape1.png";
import Shape2 from "images/shapes/shape2.png";
import Shape3 from "images/shapes/shape3.png";
import Shape4 from "images/shapes/shape4.png";
import Shape5 from "images/shapes/shape5.png";
import Shape6 from "images/shapes/shape6.png";
import Shape7 from "images/shapes/shape7.png";
import Shape8 from "images/shapes/shape8.png";
import Shape9 from "images/shapes/shape9.png";
import Brand from "images/shapes/brand.png";
import Dev from "images/shapes/dev.png";
import Design from "images/shapes/design.png";
import Growth from "images/shapes/growth.png";
import More from "images/shapes/more.png";

class NewcoSite extends Component {
  constructor(props) {
    super(props);
    this.STATS = {
      brand: 1,
      dev: 2,
      design: 3,
      growth: 4,
      more: 5
    };
    this.DIVISORS = {
      1: 60,
      2: 80,
      3: 100,
      4: 40
    };
    this.state = {
      cursorPos: { x: null, y: null },
      isChrome: false,
      loaded: false,
      statToRender: null,
      updatedCursorCss: false
    };
  }

  addScrollEvents() {
    const that = this;
    const divisors = this.DIVISORS;
    const shape1 = document.getElementsByClassName("shape-1")[0];
    const shape2 = document.getElementsByClassName("shape-2")[0];
    const shape3 = document.getElementsByClassName("shape-3")[0];
    const shape4 = document.getElementsByClassName("shape-4")[0];
    const shape5 = document.getElementsByClassName("shape-5")[0];
    const shape6 = document.getElementsByClassName("shape-6")[0];
    const shape7 = document.getElementsByClassName("shape-7")[0];
    const shape8 = document.getElementsByClassName("shape-8")[0];
    const shape9 = document.getElementsByClassName("shape-9")[0];

    const h11 = $(".newco__h1--1");
    const p1 = $(".newco__p--1");
    const h22 = $(".newco__h2--2");
    const p2 = $(".newco__p--2");
    const h33 = $(".newco__h3--3");
    const row1 = $(".newco__section-3__row-1");
    const row2 = $(".newco__section-3__row-2");
    const row3 = $(".newco__section-3__row-3");
    const row4 = $(".newco__section-3__row-4");
    const row5 = $(".newco__section-3__row-5");
    const p3 = $(".newco__p--3");
    const c4 = $(".newco__header-container--4");
    const c5 = $(".newco__header-container--5");

    $(window).scroll(function(event) {
      // SCROLL ANIMATION
      let $window = $(window);
      let $newco = $("body");
      let $panel = $(".panel");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      let scroll = $window.scrollTop() + $window.height() / 3;
      $panel.each(function() {
        let $this = $(this);
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $newco.removeClass(function(index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });
          $newco.addClass("color-" + $(this).data("color"));

          let className = $this[0].classList[0];
          if (className === "newco__section-2") {
            h22.addClass("fade-in-up-h2--2");
            p2.addClass("fade-in-up-p--2");
          } else if (className == "newco__section-3") {
            h33.addClass("fade-in");
            row1.addClass("fade-in");
            row2.addClass("fade-in");
            row3.addClass("fade-in");
            row4.addClass("fade-in");
            row5.addClass("fade-in");
            p3.addClass("fade-in");
          } else if (className == "newco__section-4") {
            c4.addClass("fade-in-up-header-container--4");
          } else if (className == "newco__section-5") {
            c5.addClass("fade-in-up-header-container--5");
          }
        }
      });

      // SHAPE PARRALAX
      let screenSize = window.innerWidth;
      if (screenSize < 768) {
        screenSize = "sm";
      } else if (screenSize >= 768 && screenSize > 1024) {
        screenSize = "md";
      } else if (screenSize >= 1024) {
        screenSize = "lg";
      }
      [
        shape1,
        shape2,
        shape3,
        shape4,
        shape5,
        shape6,
        shape7,
        shape8,
        shape9
      ].forEach((shape, i) => {
        let rect = shape.getBoundingClientRect();
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        let shapeY = rect.top + scrollTop;
        let shapeIsRenderedOnScreen =
          window.scrollY + window.innerHeight >= shapeY;
        if (shapeIsRenderedOnScreen) {
          let group = startingPositions[i]["group"];
          let startingPosition = startingPositions[i][screenSize];
          let divisor = divisors[group];
          let yPos = 0 - (scrollTop - (shapeY - window.innerHeight)) / divisor;

          switch (i) {
            case 0: // shape1
              shape1.style.top = startingPosition + yPos + "%";
              break;
            case 1: // shape2
              shape2.style.top = startingPosition + yPos + "%";
              break;
            case 2: // shape3
              shape3.style.top = startingPosition + yPos + "%";
              break;
            case 3: // shape4
              shape4.style.top = startingPosition + yPos + "%";
              break;
            case 4: // shape5
              shape5.style.bottom = startingPosition - yPos + "%";
              break;
            case 5: // shape6
              shape6.style.top = startingPosition + yPos + "%";
              break;
            case 6: // shape7
              shape7.style.bottom = startingPosition - yPos + "%";
              break;
            case 7:
              shape8.style.top = startingPosition + yPos + "%";
              break;
            case 8:
              shape9.style.bottom = startingPosition - yPos + "%";
              break;
          }
        }
      });
    });
  }

  setupCursorDot() {
    const cursor = curDot({
      borderColor: "#000",
      diameter: 75
    });

    cursor.over(".newco__stat", {
      background: "#000000",
      scale: 3
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.loaded && this.state.loaded) {
      const that = this;
      this.addScrollEvents();
      this.setupCursorDot();
      this.checkBrowserType();
    }
  }

  completeLoading = () => {
    this.setState({ loaded: true });
  };

  setStatToRender = (event, stat) => {
    let statToRender = this.STATS[stat] || null;

    if (this.state.isChrome) {
      if (statToRender) {
        $(".cursor-dot").css("mix-blend-mode", "exclusion");
      } else {
        $(".cursor-dot").css("mix-blend-mode", "");
      }
    }

    this.setState({ statToRender: statToRender });
  };

  renderSectionOne() {
    return (
      <div
        className="newco__section-1 content-padding panel"
        data-color="green"
        id="section-1"
      >
        <img
          className="shape shape-1 fade-in"
          onMouseMove={this.updateCursorCss}
          onMouseLeave={() => this.updateCursorCss(true)}
          src={Shape1}
          alt="shape1"
        />
        <img
          className="shape shape-2 fade-in"
          onMouseMove={this.updateCursorCss}
          onMouseLeave={() => this.updateCursorCss(true)}
          src={Shape2}
          alt="shape2"
        />
        <img
          className="shape shape-3 fade-in"
          onMouseMove={this.updateCursorCss}
          onMouseLeave={() => this.updateCursorCss(true)}
          src={Shape3}
          alt="shape3"
        />
        <h1 className="newco__h1 newco__h1--1 fade-in-up-h1--1">
          Build, better.
        </h1>
        <p className="newco__p newco__p--1 fade-in-up-p--1">
          Newco is a platform for exceptional entrepreneurs to build businesses
          - supported by an ecosystem that has produced 10 public companies.
        </p>
      </div>
    );
  }

  renderSectionTwo() {
    return (
      <div className="newco__section-2 content-padding panel" data-color="blue">
        <img className="shape shape-4 fade-in" src={Shape4} alt="shape4" />
        <img className="shape shape-5" src={Shape5} alt="shape5" />
        <h2 className="newco__h2 newco__h2--2">
          We work with founders from Day 0
        </h2>
        <p className="newco__p--2">
          providing them the team, tools, and capital to bring their ideas to
          life.
        </p>
      </div>
    );
  }

  renderSectionThree() {
    return (
      <div className="newco__section-3 panel" data-color="white">
        <h3 className="newco__h3--3 content-padding">We're a team of...</h3>
        <div className="newco__section-3__grid">
          <div className="newco__section-3__row-1">
            <NewcoTeamOf
              imgSrc={Brand}
              memberTitle={["brand", "strategist"]}
              memberDescription="who have crafted 83 brand identities"
              setStatToRender={this.setStatToRender}
              stat="brand"
              statToRender={this.state.statToRender}
              stats={this.STATS}
            />
          </div>
          <div className="newco__section-3__row-2">
            <NewcoTeamOf
              imgSrc={Dev}
              memberTitle={["developers"]}
              memberDescription="who have deployed 70+ MVPs"
              setStatToRender={this.setStatToRender}
              stat="dev"
              statToRender={this.state.statToRender}
              stats={this.STATS}
            />
          </div>
          <div className="newco__section-3__row-3">
            <NewcoTeamOf
              imgSrc={Design}
              memberTitle={["designers"]}
              memberDescription="who have designed 2,729 screens"
              setStatToRender={this.setStatToRender}
              stat="design"
              statToRender={this.state.statToRender}
              stats={this.STATS}
            />
          </div>
          <div className="newco__section-3__row-4">
            <NewcoTeamOf
              imgSrc={Growth}
              memberTitle={["growth", "marketers"]}
              memberDescription="who have run 1,000s of ads"
              setStatToRender={this.setStatToRender}
              stat="growth"
              statToRender={this.state.statToRender}
              stats={this.STATS}
            />
          </div>
          <div className="newco__section-3__row-5">
            <NewcoTeamOf
              imgSrc={More}
              memberTitle={["And more..."]}
              setStatToRender={this.setStatToRender}
              stat="more"
              statToRender={this.state.statToRender}
              stats={this.STATS}
            />
          </div>
        </div>
        <p className="newco__p--3 content-padding">
          who pair our startup experience with the knowledge base that IAC has
          built over two decades and across 150 brands.
        </p>
      </div>
    );
  }

  renderSectionFour() {
    return (
      <div
        className="newco__section-4 content-padding panel"
        data-color="purple"
      >
        <img className="shape shape-6" src={Shape6} alt="shape6" />
        <img className="shape shape-7" src={Shape7} alt="shape7" />
        <div className="newco__header-container newco__header-container--4">
          <h2 className="newco__h2">
            We minimize distractions and maximize efficiency so great founders
            can focus.
          </h2>
        </div>
      </div>
    );
  }

  renderSectionFive() {
    return (
      <div
        className="newco__section-5 content-padding panel"
        data-color="blush"
      >
        <img className="shape shape-8" src={Shape8} alt="shape8" />
        <img className="shape shape-9" src={Shape9} alt="shape9" />
        <div className="newco__header-container newco__header-container--5">
          <a className="newco__contact" href="mailto:hi@buildwithnewco.com">
            Contact Us
          </a>
        </div>
      </div>
    );
  }

  checkBrowserType() {
    const isChromium = window.chrome;
    const winNav = window.navigator;
    const vendorName = winNav.vendor;
    const isOpera = typeof window.opr !== "undefined";
    const isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    const isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
      // is Google Chrome on IOS
    } else if (
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
      this.setState({ isChrome: true });
      // is Google Chrome
    } else {
      // not Google Chrome
    }
  }

  componentDidMount() {
    // this.setState({ loaded: true }, () => {
    // this.checkBrowserType();
    // });
  }

  render() {
    if (!this.state.loaded)
      return <LoadingScreen completeLoading={this.completeLoading} />;

    return (
      <div className="newco">
        <div className="newco__logo-container fade-in">
          <div className="newco__logo-img-container">
            <img className="newco__logo-img" src={Logo} />
          </div>
          <div className="newco__logo-text">AN IAC INCUBATOR</div>
        </div>
        {this.renderSectionOne()}
        {this.renderSectionTwo()}
        {this.renderSectionThree()}
        {this.renderSectionFour()}
        {this.renderSectionFive()}
      </div>
    );
  }
}

export default NewcoSite;
