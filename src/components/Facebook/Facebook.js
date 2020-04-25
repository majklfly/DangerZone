import React from "react";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FacebookFilled } from "@ant-design/icons";

import { setUser } from "../../store/actions/userData";
import "./Facebook.css";

const Facebook = props => {
  const history = useHistory();

  const responseFacebook = res => {
    props.setUser(res.accessToken);
    history.push("/homepage/");
  };

  const componentClicked = () => console.log("clicked");

  return (
    <FacebookLogin
      appId="723054295168510"
      fields="name,email,picture"
      cssClass="facebookLogin"
      data-test="facebookLogin"
      textButton=" Login with Facebook account"
      icon={<FacebookFilled />}
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: res => {
      dispatch(setUser(res));
    }
  };
};

export default connect(null, mapDispatchToProps)(Facebook);
