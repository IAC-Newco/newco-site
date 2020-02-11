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
  renderSectionOne() {
    return (
      <div
        className="newco__section-1 content-padding panel"
        data-color="green"
      >
        <img className="shape shape-1" src={Shape1} alt="shape1" />
        <img className="shape shape-2" src={Shape2} alt="shape2" />
        <img className="shape shape-3" src={Shape3} alt="shape3" />
        <div className="newco__header-container newco__header-container--1">
          <h1 className="newco__h1">Build, better</h1>
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
        <div className="newco__header-container newco__header-container--2">
          <h2 className="newco__h2">We work with founders from Day 0</h2>
          <p>
            providing them the team, tools, and capital to bring their ideas to
            life.
          </p>
        </div>
      </div>
    );
  }

  renderSectionThree() {
    return (
      <div className="newco__section-3 panel" data-color="white">
        <h3 className="newco__section-3__h3 content-padding">
          We're a team of...
        </h3>
        <div className="newco__section-3__grid">
          <div className="newco__section-3__row-1">
            <div className="newco__brand">
              <div className="newco__section-3__img-1-container">
                <img
                  className="newco__section-3__img"
                  src={Brand}
                  alt="brand"
                />
              </div>
              <div className="newco__section-3__text">brand</div>
              <div className="newco__section-3__text">strategists</div>
            </div>
          </div>
          <div className="newco__section-3__row-2">
            <div className="newco__dev">
              <div className="newco__section-3__img-2-container">
                <img className="newco__section-3__img" src={Dev} alt="dev" />
              </div>
              <div className="newco__section-3__text">developers</div>
            </div>
          </div>
          <div className="newco__section-3__row-3">
            <div className="newco__design">
              <div className="newco__section-3__img-3-container"></div>
              <img
                className="newco__section-3__img-3"
                src={Design}
                alt="design"
              />
              <div className="newco__section-3__text">designers</div>
            </div>
          </div>
          <div className="newco__section-3__row-4">
            <div className="newco__growth">
              <div className="newco__section-3__img-4-container">
                <img
                  className="newco__section-3__img"
                  src={Growth}
                  alt="design"
                />
              </div>
              <div className="newco__section-3__text">growth</div>
              <div className="newco__section-3__text">marketers</div>
            </div>
          </div>
          <div className="newco__section-3__row-5">
            <div className="newco__more">
              <div className="newco__section-3__img-5-container">
                <img className="newco__section-3__img" src={More} alt="more" />
              </div>
              <div className="newco__section-3__text">And more...</div>
            </div>
          </div>
        </div>
        <p className="newco__section-3__p content-padding">
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
      <div className="newco">
        <div className="newco__logo-container">
          <div className="newco__logo-img-container">
            <img className="newco__logo-img" src={Logo} />
          </div>
          <div className="newco__logo-text font--ml">AN IAC INCUBATOR</div>
        </div>
        {this.renderSectionOne()}
        {this.renderSectionTwo()}
        {this.renderSectionThree()}
        {this.renderSectionFour()}
        {this.renderSectionFive()}
      </div>
    );
  }

  addBackgroundScrollAnimation() {
    $(window)
      .scroll(function() {
        // selectors
        var $window = $(window),
          $body = $("body"),
          $panel = $(".panel");

        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + $window.height() / 3;

        $panel.each(function() {
          var $this = $(this);

          // if position is within range of this panel.
          // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
          // Remember we set the scroll to 33% earlier in scroll var.
          if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
          ) {
            // Remove all classes on body with color-
            $body.removeClass(function(index, css) {
              return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
            });

            // Add class of currently active div
            $body.addClass("color-" + $(this).data("color"));
          }
        });
      })
      .scroll();
  }

  addParallaxEffects() {
    const shape1 = document.getElementsByClassName("shape-1")[0];
    const shape2 = document.getElementsByClassName("shape-2")[0];
    const shape3 = document.getElementsByClassName("shape-3")[0];
    const shape4 = document.getElementsByClassName("shape-4")[0];
    const shape5 = document.getElementsByClassName("shape-5")[0];
    const shape6 = document.getElementsByClassName("shape-6")[0];
    const shape7 = document.getElementsByClassName("shape-7")[0];
    const shape8 = document.getElementsByClassName("shape-8")[0];
    const shape9 = document.getElementsByClassName("shape-9")[0];

    window.addEventListener("scroll", function() {
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

      // document.body.offsetHeight; //
      // window.scrollY; // current scroll position
      // window.innerHeight; // current window height
    });
  }

  componentDidMount() {
    this.addBackgroundScrollAnimation();
    this.addParallaxEffects();
  }
}

export default NewcoSite;
