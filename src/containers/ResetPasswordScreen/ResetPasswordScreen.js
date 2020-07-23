import React, { useState } from "react";
import "./ResetPasswordScreen.css";
import { LoginBackgroundSVG } from "../../components/LoginBackgroundSVG/LoginBackgroundSVG";
import axios from "axios";

const ResetPasswordScreen = (props) => {
  const [value, setValue] = useState("");
  const uidb64 = props.match.params.uidb64;
  const token = props.match.params.token;

  const udpatePassword = async () => {
    const password = value;
    console.log(password);
    if (uidb64 && token) {
      axios
        .patch("http://127.0.0.1:8000/password-reset-complete/", {
          password,
          uidb64,
          token,
        })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e.message));
    }
  };

  return (
    <div>
      <div className="resetPasswordContainer">
        <input
          placeholder="Please insert your new password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => udpatePassword()}>Update</button>
      </div>
      <LoginBackgroundSVG />
    </div>
  );
};

export default ResetPasswordScreen;
