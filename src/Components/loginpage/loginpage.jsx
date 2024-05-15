import React from "react";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
    // Handle form submission logic here
    console.log({ email, password });
  }

  return (
    <>
      <div className="div-15">
        <div className="div-16">Welcome back!</div>
        <div className="div-17">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
        <div className="div-18">
          <form onSubmit={handleSubmit}>
            <div className="div-19">Log into your account:</div>
            <div>
              <input
                className="div-20"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                className="div-21"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>
            <div className="div-22">
              <button className="div-23">Login</button>
            </div>
            <div className="div-24">Forgot password?</div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .div-15 {
          border-radius: 30px 30px 0px 0px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          font-weight: 400;
          padding: 80px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-16 {
          color: #000;
          text-align: center;
          letter-spacing: -0.75px;
          margin-top: 89px;
          font:
            50px/72% Habibi,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .div-17 {
          color: rgba(0, 0, 0, 0.8);
          text-align: center;
          letter-spacing: -0.54px;
          align-self: stretch;
          margin-top: 74px;
          font:
            36px/50px Habibi,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            margin: 40px 4px 0 0;
          }
        }
        .div-18 {
          border-color: rgba(0, 0, 0, 0.5);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          width: 737px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          font-size: 15px;
          letter-spacing: -0.22px;
          line-height: 160%;
          margin: 50px 0 117px;
          padding: 72px 77px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin: 40px 0;
            padding: 0 20px;
          }
        }
        .div-19 {
          color: #000;
          letter-spacing: -0.36px;
          font:
            24px/150% Habibi,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
          }
        }
        .div-20 {
          font-family: Montserrat, sans-serif;
          border-color: rgba(0, 0, 0, 0.5);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          margin-top: 41px;
          width: 498px;
          max-width: 100%;
          align-items: start;
          color: rgba(0, 0, 0, 0.8);
          justify-content: center;
          padding: 15px 14px;
        }
        @media (max-width: 991px) {
          .div-20 {
            padding-right: 20px;
            margin-top: 40px;
          }
        }
        .div-21 {
          font-family: Montserrat, sans-serif;
          border-color: rgba(0, 0, 0, 0.5);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          margin-top: 27px;
          width: 498px;
          max-width: 100%;
          align-items: start;
          color: rgba(0, 0, 0, 0.8);
          justify-content: center;
          padding: 13px 14px;
        }
        @media (max-width: 991px) {
          .div-21 {
            padding-right: 20px;
          }
        }
        .div-22 {
          display: flex;
          margin-top: 27px;
          width: 130px;
          max-width: 100%;
          flex-direction: column;
          color: #fff;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          font-family: Habibi, sans-serif;
          border-radius: 6px;
          background-color: #fb1818;
          justify-content: center;
          padding: 13px 47px;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-24 {
          color: #fb1818;
          text-align: center;
          font-family: Habibi, sans-serif;
          align-self: center;
          margin-top: 39px;
        }
      `}</style>
    </>
  );
}

export default LoginPage;
