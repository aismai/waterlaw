import React from "react";

import MyButton from "../utils/button";
import Login from "./Login";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              earum repellat mollitia ullam praesentium rerum possimus dolorem
              maxime vel iure laudantium quaerat illum, nisi soluta repudiandae
              fuga vero incidunt voluptatibus.
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{ margin: "10px 0 0" }}
            />
          </div>
          <div className="right">
            <h2>Register Customers</h2>
            <p>If you have an account please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
