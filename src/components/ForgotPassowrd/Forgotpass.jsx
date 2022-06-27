import React, { useState } from "react";
import "./forgotpassowrd.scss";
import InputMask from "react-input-mask";

const Forgotpass = () => {
  const [phone, setPhone] = useState("");
  const forgotPass = async (e) => {
      // const response = await fetch(
      //   "https://motaka.herokuapp.com/forgot_password",
      //   {
      //     method: "POST", // или 'PUT'
      //     body: JSON.stringify({ phone }), // данные могут быть 'строкой' или {объектом}!
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
  };
  return (
    <div className="password">
      <div className="password_text">
        <p>Forgot Password</p>
      </div>
      <div className="password_content">
        <p>
          Enter your phone number below to receive your password reset
          instruction
        </p>
      </div>
      <div className="pasword_input">
        <form>
          <label>
            <p>Phone Number</p>
            <InputMask
              mask="+374 99 999999"
              maskChar=""
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete={"current-name"}
              type="tel"
              required
            />
            <div className="password_button">
              <button type="submit" onClick={forgotPass}>
                Reset Password
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;
