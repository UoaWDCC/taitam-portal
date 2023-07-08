"use client";

import React from "react";
import "./contact.page.css";
import contactSVG from "../../assets/contact-form-illustration.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/nodejs";

/** This describes the types of the inputs to the form. */

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  /** Creates form object that takes in inputs desrcibed above and has those two functions. */
  const form = useForm<Inputs>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  /** What we do when we press submit */
  const onSubmit = (data: Inputs) => {
    emailjs
      .send("taitam_testing", "taitam_contact", data, {
        publicKey: "SonHy1Qi9E3RpcmUh",
      })
      .then(
        (response) => {
          form.reset();
          console.log("SUCCESS!", response.status, response.text);
          return window.alert("Email sent! We'll get back to you soon.");
        },
        (err) => {
          console.log("FAILED...", err);
          return window.alert(
            "Oops! Something went wrong. Please refresh the page and try again."
          );
        }
      );
  };

  return (
    <div className="main">
      <div className="contact">
        <div className="contact-info">
          <h1 className="contact-header">Contact us</h1>
          <h2 className="contact-header-2">Have some questions?</h2>
          <p className="contact-interest">
            Thank you for your interest. Please fill out the form and we will
            get back to you promptly regarding your request
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="input-container">
              <div className="error-contact">
                <p className="form-info">Full Name*</p>
                <div className="error-msg">
                  <p className="error">{errors.name?.message}</p>
                </div>
              </div>
              <input
                className={`input ${errors.name ? "invalid" : ""}`}
                placeholder="Full Name"
                id="name"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name required",
                  },
                })}
              />
            </div>
            <div className="input-container">
              <div className="error-contact">
                <p className="form-info">Email</p>
                <div className="error-msg">
                  <p className="error">{errors.email?.message}</p>
                </div>
              </div>
              <input
                className={`input ${errors.email ? "invalid" : ""}`}
                placeholder="Email"
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
              <div className="error-contact">
                <p className="form-info">Message</p>
                <div className="error-msg">
                  <p className="error">{errors.message?.message}</p>
                </div>
              </div>

              <textarea
                className={`input-1 ${errors.message ? "invalid" : ""}`}
                placeholder="Message"
                id="message"
                rows={7}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message  required",
                  },
                })}
              />
            </div>
            <div className="final-info">
              <p className="contact-interest">
                One of our colleagues will get back in touch with you soon! Have
                a great day!
              </p>
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="image">
        <Image src={contactSVG} alt="contact" width={400} height={450} />
      </div>
    </div>
  );
}
