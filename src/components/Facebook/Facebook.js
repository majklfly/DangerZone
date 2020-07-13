import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { FacebookFilled } from "@ant-design/icons";

import { setUser } from "../../store/actions/userData";
import "./Facebook.css";

const Facebook = (props) => {
  const responseFacebook = async (res) => {
    if (res.accessToken) {
      props.setUser(res.accessToken);
    }
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <FacebookLogin
      appId="723054295168510"
      fields="name,email,picture"
      cssClass="facebookLogin"
      data-test="facebookLogin"
      textButton=" Login with Facebook"
      icon={<FacebookFilled />}
      callback={responseFacebook}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.AuthReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (res) => {
      dispatch(setUser(res));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
