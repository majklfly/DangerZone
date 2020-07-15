import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { Spin } from "antd";
import { FacebookFilled } from "@ant-design/icons";

import { setUser } from "../../store/actions/userData";
import "./Facebook.css";

const Facebook = (props) => {
  const [loading, setLoading] = useState(false);
  const responseFacebook = async (res) => {
    console.log(res);
    if (res.accessToken) {
      props.setUser(res.accessToken);
      setTimeout(function () {
        window.location.reload();
      }, 1000);
      setTimeout(function () {
        setLoading(false);
      }, 1300);
    }
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <FacebookLogin
          appId="723054295168510"
          fields="name,email,picture"
          cssClass="facebookLogin"
          data-test="facebookLogin"
          textButton=" Login with Facebook"
          icon={<FacebookFilled />}
          onClick={() => setLoading(true)}
          callback={responseFacebook}
        />
      )}
    </>
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
