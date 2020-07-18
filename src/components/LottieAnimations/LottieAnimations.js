import React, { Component } from "react";

import Lottie from "react-lottie";
import separate from "../../assets/separate.json";
import handwashing from "../../assets/handwashing.json";
import foodsafety from "../../assets/foodsafety.json";
import foodalergy from "../../assets/foodalergy.json";
import pestcontrol from "../../assets/pestcontrol.json";
import cleaning from "../../assets/cleaning.json";
import contamination from "../../assets/contamination.json";
import viruses from "../../assets/viruses.json";
import update from "../../assets/update.json";

export class HandWashingAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: handwashing,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}

export class SeparateAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: separate,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}

export class FoodSafetyAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: foodsafety,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}

export class FoodAlergyAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: foodalergy,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}
export class PestControlAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: pestcontrol,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}
export class CleaningAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: cleaning,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}
export class ContaminationAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: contamination,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}
export class VirusAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: viruses,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        isPaused={!this.props.active}
        className="cardAnimation"
      />
    );
  }
}
export class Update extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: update,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        width={80}
        height={80}
        Animated={1}
        isClickToPauseDisabled={true}
        isStopped={!this.props.active}
      />
    );
  }
}
