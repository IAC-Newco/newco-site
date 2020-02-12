import React, { Component } from "react";
import $ from "jquery";

// date
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
      BRAND: 1,
      DEV: 2,
      DESIGN: 3,
      GROWTH: 4,
      MORE: 5
    };
    this.myRef = React.createRef();
    this.state = {
      statToRender: null
    };
  }

  getContainerClassName(stat) {
    if (stat === "DESIGN") {
      return "newco__section-3__img-3-pulse-pulse";
    } else {
      let pulse = "";
      const baseClass = `newco__section-3__img-${this.STATS[stat]}-container`;
      if (!this.state.statToRender) pulse = `${baseClass}-pulse`;
      return `${baseClass} ${pulse}`;
    }
  }

  getStatClassName(stat) {
    let display = "fade-in";
    const baseClass = "newco__section-3__stat";
    if (this.STATS[stat] !== this.state.statToRender) display = "hidden";

    return `${baseClass} ${baseClass}--${stat.toLowerCase()} ${display}`;
  }

  setStatToRender = (event, stat) => {
    let statToRender = this.STATS[stat] || null;
    this.setState({ statToRender: statToRender });
  };

  renderSectionOne() {
    return (
      <div
        className="newco__section-1 content-padding panel"
        data-color="green"
        id="section-1"
      >
        <img className="shape shape-1" src={Shape1} alt="shape1" />
        <img className="shape shape-2" src={Shape2} alt="shape2" />
        <img className="shape shape-3" src={Shape3} alt="shape3" />
        <div className="newco__header-container newco__header-container--1">
          <h1 className="newco__h1">Build, better.</h1>
          <p className="newco__p newco__p--1">
            Newco is a platform for exceptional entrepreneurs to build
            businesses - supported by an ecosystem that has produced 10 public
            companies.
          </p>
        </div>
        <div />
      </div>
    );
  }

  renderSectionTwo() {
    return (
      <div className="newco__section-2 content-padding panel" data-color="blue">
        <img className="shape shape-4" src={Shape4} alt="shape4" />
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
            <div className="newco__brand">
              <div className={this.getContainerClassName("BRAND")}>
                <img
                  className="newco__section-3__img"
                  onMouseEnter={() => this.setStatToRender(event, "BRAND")}
                  onMouseLeave={() => this.setStatToRender(event, null)}
                  src={Brand}
                  alt="brand"
                />
                <div
                  className={this.getStatClassName("BRAND")}
                  onMouseEnter={() => this.setStatToRender(event, "BRAND")}
                  onMouseLeave={() => this.setStatToRender(null)}
                >
                  who have crafted 76 brand identities
                </div>
              </div>
              <div className="newco__section-3__text">brand</div>
              <div className="newco__section-3__text">strategists</div>
            </div>
          </div>
          <div className="newco__section-3__row-2">
            <div className="newco__dev">
              <div className={this.getContainerClassName("DEV")}>
                <img
                  className="newco__section-3__img"
                  onMouseEnter={() => this.setStatToRender(event, "DEV")}
                  onMouseLeave={() => this.setStatToRender(null)}
                  src={Dev}
                  alt="dev"
                />
                <div
                  className={this.getStatClassName("DEV")}
                  onMouseEnter={() => this.setStatToRender(event, "DEV")}
                  onMouseLeave={() => this.setStatToRender(null)}
                >
                  who have deployed 50+ MVPs
                </div>
              </div>
              <div className="newco__section-3__text">developers</div>
            </div>
          </div>
          <div className="newco__section-3__row-3">
            <div className="newco__design">
              <div className={this.getContainerClassName("DESIGN")}></div>
              <div className="newco__section-3__img-3-container">
                <img
                  className="newco__section-3__img-3"
                  onMouseEnter={() => this.setStatToRender(event, "DESIGN")}
                  onMouseLeave={() => this.setStatToRender(null)}
                  src={Design}
                  alt="design"
                />
                <div
                  className={this.getStatClassName("DESIGN")}
                  onMouseEnter={() => this.setStatToRender(event, "DESIGN")}
                  onMouseLeave={() => this.setStatToRender(null)}
                >
                  who have deployed 50+ MVPs
                </div>
              </div>
              <div className="newco__section-3__text">designers</div>
            </div>
          </div>
          <div className="newco__section-3__row-4">
            <div className="newco__growth">
              <div className={this.getContainerClassName("GROWTH")}>
                <img
                  className="newco__section-3__img"
                  onMouseEnter={() => this.setStatToRender(event, "GROWTH")}
                  onMouseLeave={() => this.setStatToRender(null)}
                  src={Growth}
                  alt="growth"
                />
                <div
                  className={this.getStatClassName("GROWTH")}
                  onMouseEnter={() => this.setStatToRender(event, "GROWTH")}
                  onMouseLeave={() => this.setStatToRender(null)}
                >
                  who have run thoudsands of ads
                </div>
              </div>
              <div className="newco__section-3__text">growth</div>
              <div className="newco__section-3__text">marketers</div>
            </div>
          </div>
          <div className="newco__section-3__row-5">
            <div className="newco__more">
              <div className={this.getContainerClassName("MORE")}>
                <img
                  className="newco__section-3__img"
                  onMouseEnter={() => this.setStatToRender(event, "MORE")}
                  onMouseLeave={() => this.setStatToRender(null)}
                  src={More}
                  alt="more"
                />
                <div
                  className={this.getStatClassName("MORE")}
                  onMouseEnter={() => this.setStatToRender(event, "MORE")}
                  onMouseLeave={() => this.setStatToRender(null)}
                >
                  who have deployed 50+ MVPs
                </div>
              </div>
              <div className="newco__section-3__text">And more...</div>
            </div>
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

  render() {
    return (
      <div className="newco" ref={this.myRef}>
        <div className="newco__logo-container">
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

  addScrollEvents() {
    // const
    const shape1 = document.getElementsByClassName("shape-1")[0];
    const shape2 = document.getElementsByClassName("shape-2")[0];
    const shape3 = document.getElementsByClassName("shape-3")[0];
    const shape4 = document.getElementsByClassName("shape-4")[0];
    const shape5 = document.getElementsByClassName("shape-5")[0];
    const shape6 = document.getElementsByClassName("shape-6")[0];
    const shape7 = document.getElementsByClassName("shape-7")[0];
    const shape8 = document.getElementsByClassName("shape-8")[0];
    const shape9 = document.getElementsByClassName("shape-9")[0];

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

    $("body").scroll(function() {
      // SCROLL ANIMATION
      let $window = $("body"),
        $newco = $(".newco"),
        $panel = $(".panel");
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
      const mobileScreen = window.innerWidth < 768;
      const tabletScreen = window.innerWidth >= 768 && window.innerWidth < 1024;
      const desktopScreen = window.innerWidth >= 1024;
      const noDiff = { 0: true, 1: true, 2: true, 3: true };
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
        const shapeIsRenderedOnScreen =
          window.scrollY + window.innerHeight >= shapeY;

        if (shapeIsRenderedOnScreen) {
          let startingPosition;
          const group = startingPositions[i]["group"];
          if (mobileScreen) {
            startingPosition = startingPositions[i]["sm"];
          } else if (tabletScreen) {
            startingPosition = startingPositions[i]["md"];
          } else if (desktopScreen) {
            startingPosition = startingPositions[i]["lg"];
          }
          let yPos;
          let divisor;

          if (group === 1) {
            divisor = 60;
          } else if (group === 2) {
            divisor = 80;
          } else if (group === 3) {
            divisor = 100;
          } else if (group === 4) {
            divisor = 40;
          }

          if (noDiff[i]) {
            yPos = 0 - scrollTop / divisor;
          } else {
            yPos = 0 - (scrollTop - (shapeY - window.innerHeight)) / divisor;
          }
          console.log("hit", i);
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

  addAnimationCallbacks() {
    const selectors = [
      $(".newco__p--2"),
      $(".newco__h2--2"),
      $(".newco__h3--3"),
      $(".newco__section-3__row-1"),
      $(".newco__section-3__row-2"),
      $(".newco__section-3__row-3"),
      $(".newco__section-3__row-4"),
      $(".newco__section-3__row-5"),
      $(".newco__p--3"),
      $(".newco__header-container--4"),
      $(".newco__header-container--5"),
      $(".newco__section-3__stat")
    ];

    selectors.forEach(selector => {
      selector.bind(
        "oanimationend animationend webkitAnimationEnd",
        function() {
          selector.css("opacity", 1);
        }
      );
    });
  }

  componentDidMount() {
    $(window).scrollTop();
    // this.myRef.current.scrollTo(0, 0);
    this.addScrollEvents();
    this.addAnimationCallbacks();
  }
}

export default NewcoSite;
