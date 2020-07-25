import React, { useState } from "react";
import "./SendNewPasswordScreen.css";
import { LoginBackgroundSVG } from "../../components/LoginBackgroundSVG/LoginBackgroundSVG";
import server from "../../api/server";
import { Spin, Input } from "antd";

const SendNewPasswordScreen = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleResponse = (res) => {
    setLoading(false);
    setMessage(res.data[0]);
  };

  const udpatePassword = async () => {
    const email = value;
    setLoading(true);
    server
      .post("/request-reset-email/", {
        email,
      })
      .then((res) => handleResponse(res))
      .catch((e) => setMessage("Ooops, something went wrong"));
  };

  return (
    <div>
      <div className="resetPasswordContainer">
        <Input
          placeholder="Please insert your email"
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
              <button onClick={() => udpatePassword()}>Send me email</button>
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

export default SendNewPasswordScreen;
