import React, { useState } from "react";
import "./ResetPasswordScreen.css";
import { LoginBackgroundSVG } from "../../components/LoginBackgroundSVG/LoginBackgroundSVG";
import server from "../../api/server";
import { useHistory } from "react-router-dom";
import { Spin, Input } from "antd";

const ResetPasswordScreen = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const history = useHistory();
  const uidb64 = props.match.params.uidb64;
  const token = props.match.params.token;

  const handleResponse = (res) => {
    setLoading(false);
    setMessage(res.data.message);
    res.data.success && history.push("/");
  };

  const handleError = () => {
    setLoading(false);
    setMessage("Token is not valid anymore");
  };

  const udpatePassword = async () => {
    setLoading(true);
    const password = value;
    console.log(password);
    if (uidb64 && token) {
      server
        .patch("/password-reset-complete/", {
          password,
          uidb64,
          token,
        })
        .then((res) => handleResponse(res))
        .catch((e) => handleError());
    }
  };

  return (
    <div>
      <div className="resetPasswordContainer">
        <Input
          placeholder="Please insert your new password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {loading ? (
          <h3>
            <Spin size="large" className="spinnerReset" />
          </h3>
        ) : (
          <>
            {!message ? (
              <button onClick={() => udpatePassword()}>Update</button>
            ) : (
              <h3>{message}</h3>
            )}
          </>
        )}
      </div>
      <LoginBackgroundSVG />
    </div>
  );
};

export default ResetPasswordScreen;
