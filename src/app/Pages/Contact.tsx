"use client";

import React from "react";
import "./Contact.css"; // import the CSS file
import { Poppins } from "next/font/google";
import contactSVG from "../Images/Illustration.svg";
import Image from "next/image";
import {useForm} from 'react-hook-form';

type Props = {};

/** This descibes the types of the inputs to the form. */

type Inputs = {
  name: string;
  email: string;
  message: string;
};


export default function Contact({}: Props) {

  /** Creates form object that takes in inputs desrcibed above and has those two functions. */
  const form = useForm<Inputs>();
  const {register, handleSubmit} = form;

  /** What we do when we press submit */
  const onSubmit = (data:Inputs) => {
    console.log("Done", data)
  }




  return (
    <div className="main">
      <div className="contact">
        <div className="contact-info">
          <h1 className="contact-header">Contact us</h1>
          <h2 className="contact-header-2">Have some questions</h2>
          <p className="contact-interest">
            Thank you for your interest. Please fill out the form and we will
            get back to you promptly regarding your request
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <p className="form-info">Full Name*</p>
              <input
                className="input"
                placeholder="Full Name"
                id ="name"
                type="text"
                {...register("name")}
              />
              <p className="form-info">Email</p>
              <input className="input" placeholder="Email" type="email" id = "email" {...register("email")} />
              <p className="form-info">Message</p>
              <textarea className="input" placeholder="Message" rows={5} id = "message" {...register("message")} />

              <div>
                <button className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="image">
        <Image src={contactSVG} alt="contact" width={400} height={400} />
      </div>
    </div>
  );
}
