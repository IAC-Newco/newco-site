import React, { Component } from "react";
import $ from "jquery";

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

  addScrollAnimation() {
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

  addParallax() {
    const shape1 = document.getElementsByClassName("shape-1")[0];
    const shape2 = document.getElementsByClassName("shape-2")[0];
    const shape3 = document.getElementsByClassName("shape-3")[0];
    const shape4 = document.getElementsByClassName("shape-4")[0];
    const shape5 = document.getElementsByClassName("shape-5")[0];
    const shape6 = document.getElementsByClassName("shape-6")[0];
    const shape7 = document.getElementsByClassName("shape-7")[0];
    const shape8 = document.getElementsByClassName("shape-8")[0];
    const shape9 = document.getElementsByClassName("shape-9")[0];
    const startingPositions = {
      0: {
        group: 1,
        sm: -14.025,
        md: -18.025,
        lg: -37.025
      },
      1: {
        group: 2,
        sm: 14.667,
        md: 21.667,
        lg: 18.667
      },
      2: {
        group: 1,
        sm: 79.975,
        md: 79.975,
        lg: 81.975
      },
      3: {
        group: 2,
        sm: -14.333,
        md: -12.333,
        lg: -20.333
      },
      4: {
        group: 1,
        sm: -5.025,
        md: -5.025,
        lg: -22.025
      },
      5: {
        group: 2,
        sm: 5.333,
        md: 5.333,
        lg: 15.333
      },
      6: {
        group: 1,
        sm: 16.975,
        md: 16.975,
        lg: 6.975
      },
      7: {
        group: 2,
        sm: -6.667,
        md: -6.667,
        lg: -29.667
      },
      8: {
        group: 1,
        sm: 9.975,
        md: 9.975,
        lg: 9.975
      }
    };

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

        if (window.scrollY + window.innerHeight >= shapeY) {
          let startingPosition;
          const group = startingPositions[i]["group"];
          if (mobileScreen) {
            startingPosition = startingPositions[i]["sm"];
          } else if (tabletScreen) {
            startingPosition = startingPositions[i]["md"];
          } else if (desktopScreen) {
            startingPosition = startingPositions[i]["lg"];
          }
          let yPos1;
          let yPos2;

          if (noDiff[i]) {
            if (group === 1) {
              yPos1 = 0 - scrollTop / 40;
            } else if (group === 2) {
              yPos2 = 0 - scrollTop / 80;
            }
          } else {
            if (group === 1) {
              yPos1 = 0 - (scrollTop - (shapeY - window.innerHeight)) / 60;
            } else if (group === 2) {
              yPos2 = 0 - (scrollTop - (shapeY - window.innerHeight)) / 80;
            }
          }

          switch (i) {
            case 0: // shape1
              shape1.style.top = startingPosition + yPos1 + "%";
              break;
            case 1: // shape2
              shape2.style.top = startingPosition + yPos2 + "%";
              break;
            case 2: // shape3
              shape3.style.top = startingPosition + yPos1 + "%";
              break;
            case 3: // shape4
              shape4.style.top = startingPosition + yPos2 + "%";
              break;
            case 4: // shape5
              shape5.style.bottom = startingPosition - yPos1 + "%";
              break;
            case 5: // shape6
              shape6.style.top = startingPosition + yPos2 + "%";
              break;
            case 6: // shape7
              shape7.style.bottom = startingPosition - yPos1 + "%";
              break;
            case 7:
              shape8.style.top = startingPosition + yPos2 + "%";
              break;
            case 8:
              shape9.style.bottom = startingPosition - yPos1 + "%";
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
    this.addScrollAnimation();
    this.addParallax();
  }
}

export default NewcoSite;
