import React, { Component } from "react";
import $ from "jquery";

// images
import Logo from "images/logo.png";

class NewcoSite extends Component {
  renderSectionOne() {
    return (
      <div
        className="newco__section-1 content-padding panel"
        data-color="green"
      >
        <div className="newco__header-container newco__header-container--1">
          <h1 className="newco__h1">Builds, better</h1>
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
      <div
        className="newco__section-3 content-padding panel"
        data-color="white"
      >
        <h3 className="newco__section-3__h3">We're a team of...</h3>
        <p>
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
        <div className="newco__header-container newco__header-container--5">
          <div className="newco__contact">Contact Us</div>
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

  componentDidMount() {
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
}

export default NewcoSite;
