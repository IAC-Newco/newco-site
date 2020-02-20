import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

class NewcoTeamOf extends Component {
  statIsBeingRendered() {
    const { stat, stats, statToRender } = this.props;
    return stats[stat] === statToRender;
  }

  getContainerClassName() {
    const { stat, stats, statToRender } = this.props;
    if (stat === "design") {
      if (!statToRender) return "newco__section-3__img-3-pulse-pulse";
    } else {
      let pulse = "";
      const baseClass = `newco__section-3__img-${stats[stat]}-container`;
      if (!statToRender) pulse = `${baseClass}-pulse`;

      return `${baseClass} ${pulse}`;
    }
  }

  getStatImgClassName() {
    const { stat } = this.props;
    let display = "";
    let baseClass = "newco__section-3__img";
    if (stat === "design") {
      baseClass = "newco__section-3__img-3";
    }
    if (stat !== "more") {
      if (this.statIsBeingRendered()) display = "fade-out";
    }

    return `${baseClass} ${display}`;
  }

  getStatClassName() {
    const { stat } = this.props;
    let display = "fade-in";
    const baseClass = "newco__section-3__stat";
    if (!this.statIsBeingRendered()) display = "hidden";

    return `${baseClass} ${baseClass}--${stat} ${display}`;
  }

  renderImage() {
    const { stat } = this.props;

    return (
      <img
        className={this.getStatImgClassName(stat)}
        src={this.props.imgSrc}
        alt={stat}
      />
    );
  }

  renderMemberDescription() {
    return (
      <div className={this.getStatClassName(this.props.stat)}>
        {this.props.memberDescription}
      </div>
    );
  }

  renderMemberTitle() {
    const { stat, statToRender, stats } = this.props;
    let fadeOut = "";
    if (stat !== "more") {
      fadeOut = statToRender === stats[stat] ? "fade-out" : "";
    }

    return this.props.memberTitle.map((textString, i) => {
      return (
        <div
          className={`newco__section-3__text ${fadeOut}`}
          key={`${stat}-${i}`}
        >
          {textString}
        </div>
      );
    });
  }

  setDescriptionPosition = event => {
    $(`.newco__section-3__stat--${this.props.stat}`).css({
      left: event.pageX,
      top: event.pageY
    });
  };

  render() {
    const { stat } = this.props;
    const className = stat !== "more" ? "newco__stat" : "";
    if (stat === "design") {
      return (
        <div
          className="newco__stat newco__design"
          onMouseEnter={() => this.props.setStatToRender(event, "design")}
          onMouseLeave={() => this.props.setStatToRender(event, null)}
        >
          <div className={this.getContainerClassName()}></div>
          <div className="newco__section-3__img-3-container">
            <img
              className={this.getStatImgClassName(stat)}
              src={this.props.imgSrc}
              alt={stat}
            />
          </div>
          {this.renderMemberDescription()}
          {this.renderMemberTitle()}
        </div>
      );
    }

    return (
      <div
        className={`${className} newco__${stat}`}
        onMouseEnter={() => this.props.setStatToRender(event, stat)}
        onMouseLeave={() => this.props.setStatToRender(event, null)}
      >
        <div className={this.getContainerClassName()}>{this.renderImage()}</div>
        {this.renderMemberDescription()}
        {this.renderMemberTitle()}
      </div>
    );
  }
}

export default NewcoTeamOf;

NewcoTeamOf.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  memberDescription: PropTypes.string,
  memberTitle: PropTypes.array.isRequired,
  setStatToRender: PropTypes.func,
  statToRender: PropTypes.number,
  stat: PropTypes.string.isRequired,
  stats: PropTypes.object
};
