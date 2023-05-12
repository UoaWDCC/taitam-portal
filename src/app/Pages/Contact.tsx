"use client"

import React from "react";
import "./Contact.css"; // import the CSS file
import { Poppins } from "next/font/google";
import contactSVG from "../Images/Illustration.svg";
import Image from "next/image";



type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

//use everything but font size and stuff that makes sense to me.

export default function Contact({}: Props) {
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
          <form>
            <div className="form">
              <p className="form-info">Full Name*</p>
              <input
                className="input"
                placeholder="Full Name"
                name="Full Name"
                type="text"
              />
              <p className="form-info">Email</p>
              <input className="input" placeholder="Email" type="email" />
              <p className="form-info">Message</p>
              <textarea className="input" placeholder="Message" rows={5} />

              <div>
                <button className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="image">
        <Image src={contactSVG} alt="contact" width={400} height = {400}/>
      </div>
    </div>
  );
}
