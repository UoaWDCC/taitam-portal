"use client";
import React from "react";
import { useForm } from "react-hook-form";
import "./profilepage.css";
import { ToastContainer, toast } from "react-toastify";
import { signWithEmailAndPassword } from "../firebase/firebase";

type Inputs = {
  password: string;
  oldPassword: string;
  newPassword: string;
};

export default function ProfilePage() {
  return (
    <div className = "main">
        <div className="sideBar">
            <div className="profileIcon">
                <img src="profileIcon.png" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>Personal Details</li>
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
                <h2 className="header">Personal Details</h2>
                <div className="detailsContainer">
                    <ul>
                        <li>Full Name: </li>
                        <li>Email: </li>
                        <li>Employment Details: </li>
                        <li>Open for work: </li>
                        <li>Degree of study: </li>
                        <li>Education Level: </li>
                    </ul>
                    <button className="update">Update</button>
                </div>
            </div>
            <div className="changePassword">
                <h2 className = "header">Change your password</h2>
                <form action="">
                    <label htmlFor="oldPassword">Old password</label>
                    <input type="password" name="oldPassword" id="oldPassword" />
                    <label htmlFor="newPassword">New password</label>
                    <input type="password" name="newPassword" id="newPassword" />
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                    <button className = "submit">Submit</button>
                </form>
            </div>
            <div className = "articlesHistory">
                <h2 className = "header">Recently viewed articles</h2>
            </div>
            <div className = "uploadCV">
                <h2 className = "header">Upload your CV</h2>
                <button className = "upload">Upload</button>
            </div>
        </div>
    </div>

  );
}
