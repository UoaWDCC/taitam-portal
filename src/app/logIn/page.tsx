"use client";

import React from "react";
import { useForm } from "react-hook-form";
import "./logIn.page.css";
import { ToastContainer, toast } from "react-toastify";
import { signWithEmailAndPassword } from "../firebase/firebase";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function LogInPage() {
  const form = useForm<Inputs>();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  const handleLoginIn = (): any => {
    const email = getValues("email");
    const password = getValues("password");
    signWithEmailAndPassword(email, password).then(
      (response) => {
        form.reset();
        console.log("SUCCESS!");
        return toast.success("You successfully logged in.");
      },
      (err) => {
        console.log("FAILED...", err);
        return toast.error(
          "Oops! Incorrect email or password. Please try again."
        );
      }
    );
  };

  return (
    <div className="main">
      <div className="account-existing">
        <div className="log-in-header-container">
          <h1 className="log-in-header">login</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="input-container">
              <div className="error-logIn">
                <p className="form-info">Email</p>
                <div className="error-msg">
                  <p className="error">{errors.email?.message}</p>
                </div>
              </div>
              <input
                className={`input ${errors.email ? "invalid" : ""}`}
                placeholder="e.g. taitamariki@potentia.com"
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  validate: {
                    notEmpty: (fieldValue) => {
                      return fieldValue !== "" || "Email address required";
                    },
                    notAdmin: (fieldValue) => {
                      return (
                        fieldValue !== "admin@taitam.com" ||
                        "Enter a different email address"
                      );
                    },
                  },
                })}
              />
            </div>
            <div className="input-container">
              <div className="error-logIn">
                <p className="form-info">Password</p>
                <div className="error-msg">
                  <p className="error">{errors.password?.message}</p>
                </div>
              </div>
              <input
                className={`input ${errors.password ? "invalid" : ""}`}
                placeholder="●●●●●●●●●"
                type="password"
                id="password"
                {...register("password", {
                  validate: {
                    notEmpty: (fieldValue) => {
                      return fieldValue !== "" || "Password required";
                    },
                    notAdmin: (fieldValue) => {
                      return (
                        fieldValue !== "ADMINTAITAM" ||
                        "Enter a different email address"
                      );
                    },
                  },
                })}
              />
            </div>
            <a className="button-container" href="">
              <button className="button" onClick={handleLoginIn}>
                Sign in
              </button>
            </a>
          </form>
        </div>
      </div>
      <div className="create-new-acc">
        <h1 className="new-here">
          new <br></br>here?
        </h1>
        <p className="create-new-acc-text">
          Sign up and discover a great amount of new opportunities!
        </p>
        <a className="button-container" href="/signUp">
          <button className="button">Sign Up</button>
        </a>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
