"use client";
import React from "react";
import { useForm } from "react-hook-form";
import "./profilepage.css";
import { ToastContainer, toast } from "react-toastify";
import { signWithEmailAndPassword } from "../firebase/firebase";

type Inputs = {
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  newPassword: string;
};

export default function ProfilePage() {
  return (
    <div className = "main">
        <div className="sideBar">
            <div className="profileIcon">
                <img src="Icon.png" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>Profile</li>
                    <li>Change your password</li>
                    <li>History</li>
                    <li>Upload your CV</li>
                </ul>
            </div>
            <div className="logOutButtonContainer">
                <button className="logOut">Log out</button>
            </div>
        </div>
        <div className="mainContext">
            <div className="personalDetails">
                <h2>Personal Details</h2>
                <li>Fullname: </li>
                <li>Email: </li>
                <li>Employment Details: </li>
                <li>Open for work: </li>
                <li>Degree of study: </li>
                <li>Education Level: </li>
            </div>
            <div className="changePassword">
                <h2>Change your password</h2>
                <form action="">
                    <label htmlFor="oldPassword">Old password</label>
                    <input type="password" name="oldPassword" id="oldPassword" />
                    <label htmlFor="newPassword">New password</label>
                    <input type="password" name="newPassword" id="newPassword" />
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                    <button>Submit</button>
                </form>
            </div>
            <div className = "Recently viewed Articles">

            </div>
            <div className = "Upload your CV">
                <button>Upload</button>
            </div>
        </div>
    </div>

  );
}
