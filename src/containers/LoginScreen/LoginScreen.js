import React from "react";
import "./LoginScreen.scss";
import NormalLoginForm from "../../components/Login/Login";
import WrappedNormalSignupForm from "../../components/Signup/Signup";
import { LoginBackgroundSVG } from "../../components/LoginBackgroundSVG/LoginBackgroundSVG";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggingActive: true };
  }

  changeState() {
    const { isLoggingActive } = this.state;
    if (isLoggingActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prevState) => ({
      isLoggingActive: !prevState.isLoggingActive,
    }));
  }

  render() {
    const { isLoggingActive } = this.state;
    const current = isLoggingActive ? "Signup" : "Login";
    return (
      <>
        <div style={{ overflow: "hidden" }} className="loginContainer">
          <div className="App" data-test="App">
            <div className="login">
              <div className="container" data-test="container">
                {isLoggingActive && (
                  <NormalLoginForm
                    containerRef={(ref) => (this.current = ref)}
                    data-test="LoginForm"
                  />
                )}
                {!isLoggingActive && (
                  <WrappedNormalSignupForm
                    containerRef={(ref) => (this.current = ref)}
                    data-test="SignupForm"
                  />
                )}
              </div>
              <RightSide
                current={current}
                containerRef={(ref) => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          </div>
          <LoginBackgroundSVG />
        </div>
        <div className="SmallScreenWarning">
          <div className="SmallScreenWarningText">
            The screen of your device is too small to fully enjoy the
            application. Please use our{" "}
            <a href="https://play.google.com/store/apps/details?id=com.dangerzone.dangerzone">
              app
            </a>{" "}
            or a device with bigger screen
          </div>
        </div>
      </>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginScreen;
