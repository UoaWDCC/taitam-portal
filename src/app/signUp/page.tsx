"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { createWithEmailAndPassword, createUser } from "../firebase/firebase";
import "./signUp.page.css";
import DbUser from "../user";

export default function SignUpPage() {
  const form = useForm();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const [selectedEducation, setSelectedEducation] = useState("");
  const [lookingForWork, setLookingForWork] = useState<
    "Yes" | "No" | undefined
  >(undefined);

  useEffect(() => {
    setLookingForWork(undefined);
  }, []);

  const onSubmit = () => {
    if (!selectedEducation || selectedEducation === "") {
      console.log("Please select a valid education level");
      return;
    }
  };

  const handleSignUp = (): any => {
    const email = getValues("email");
    const password = getValues("password");
    const name = getValues("name");
    const employment = getValues("employment");
    const degree = getValues("studyingDegree");
    if (!degree || !selectedEducation || !lookingForWork || !name || !employment) {
      return toast.error("Form needs to be filled");
    }
    createWithEmailAndPassword(email, password).then(
      (response) => {
        form.reset();
        console.log("SUCCESS!");
        createUser({
          name: name,
          email: email,
          education: selectedEducation,
          employment: employment,
          lookingForWork: lookingForWork,
          studyingDegree: degree,
        });
        return toast.success("You successfully signed up.");
      }).catch (err => {
        console.log("FAILED...", err);
        if (password.length < 6) {
          return toast.error("Password should be atleast six characters");
        } else {
          return toast.error(err.code);
        }
      });
  };

  return (
    <div className="main">
      <div className="sign-up-header-container">
        <h1 className="sign-up-header">sign up</h1>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">Full Name*</p>
              <div className="error-msg">
                <p className="error">{errors.name?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <input
              className={`input ${errors.name ? "invalid" : ""}`}
              placeholder="e.g. Taitamariki Potentia"
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
            <div className="error-signUp">
              <p className="form-info">Email</p>
              <div className="error-msg">
                <p className="error">{errors.email?.message?.toString() ?? ""}</p>
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
                required: "Email address required",
              })}
            />
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">Password</p>
              <div className="error-msg">
                <p className="error">{errors.password?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <input
              className={`input ${errors.password ? "invalid" : ""}`}
              placeholder="●●●●●●●●●"
              type="password"
              id="password"
              {...register("password", {
                required: "Password required",
              })}
            />
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">Education Level</p>
              <div className="error-msg">
                <p className="error">{errors.education?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <select
              className={`input ${errors.education ? "invalid" : ""}`}
              id="education"
              {...register("education", {
                required: "Education level required",
                validate: (value) =>
                  value !== "" || "Please select a valid education level",
              })}
              value={selectedEducation}
              onChange={(e) => setSelectedEducation(e.target.value)}
            >
              <option value="">Select your education level</option>
              <option value="highschool">Highschool</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">What&apos;s your Employment Status?</p>
              <div className="error-msg">
                <p className="error">{errors.employment?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <input
              className={`input ${errors.employment ? "invalid" : ""}`}
              placeholder="e.g. Full-Time Student"
              type="employment"
              id="employment"
              {...register("employment", {
                required: "Need to enter employment status",
              })}
            />
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">Are you looking for work?</p>
              <div className="error-msg">
                <p className="error">{errors.lookingForWork?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <div>
              <label htmlFor="lookingForWorkYes" className="checkbox-label">
                <input
                  type="checkbox"
                  id="lookingForWorkYes"
                  {...register("lookingForWork", {
                    required: "Please select your work preference",
                  })}
                  value="Yes"
                  checked={lookingForWork === "Yes"}
                  onChange={() => setLookingForWork("Yes")}
                />
                Yes
              </label>
              <label htmlFor="lookingForWorkNo" className="checkbox-label">
                <input
                  type="checkbox"
                  id="lookingForWorkNo"
                  {...register("lookingForWork", {
                    required: "Please select your work preference",
                  })}
                  value="No"
                  checked={lookingForWork === "No"}
                  onChange={() => setLookingForWork("No")}
                />
                No
              </label>
            </div>
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">What&apos;s your degree?</p>
              <div className="error-msg">
                <p className="error">{errors.studyingDegree?.message?.toString() ?? ""}</p>
              </div>
            </div>
            <input
              className={`input ${errors.studyingDegree ? "invalid" : ""}`}
              placeholder="e.g. Bachelor of Computer Science, N/A, etc."
              type="studyingDegree"
              id="studyingDegree"
              {...register("studyingDegree", {
                required: "Need to enter your studying degree",
              })}
            />
          </div>

          <div className="button-container">
            <button type="submit" className="button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
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
