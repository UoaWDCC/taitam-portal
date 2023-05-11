import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.css"; // import the CSS file

type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

//use everything but font size and stuff that makes sense to me.

export default function Contact({}: Props) {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1 className="contact-header">Contact us</h1>
        <h2 className="contact-header-2">Have some questions</h2>
        <p  className="contact-interest">Thank you for your interest. Please fill out the form and we will get back to you promptly regarding your request</p>
      </div>

      <div>
        <form>
          <div className="form">
            <input placeholder="Full Name" name="Full Name" type="text" />
            <input placeholder="Email" type="email" />
            <textarea placeholder="Message" rows={7} />

            <div>
            <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
