"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./signUp.page.css";

type Inputs = {
  name: string;
  email: string;
  password: string;
  education: string;
  employment: string;
  lookingForWork: "Yes" | "No" | undefined;
  studyingDegree: string;
};

export default function SignUpPage() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;

  const [selectedEducation, setSelectedEducation] = useState("");
  const [lookingForWork, setLookingForWork] = useState<
    "Yes" | "No" | undefined
  >(undefined);

  useEffect(() => {
    setLookingForWork(undefined);
  }, []);

  const onSubmit = (data: Inputs) => {
    if (!selectedEducation || selectedEducation === "") {
      console.log("Please select a valid education level");
      return;
    }
    console.log(data);
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
                <p className="error">{errors.name?.message}</p>
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
                required: "Email address required",
              })}
            />
          </div>

          <div className="input-container">
            <div className="error-signUp">
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
                required: "Password required",
              })}
            />
          </div>

          <div className="input-container">
            <div className="error-signUp">
              <p className="form-info">Education Level</p>
              <div className="error-msg">
                <p className="error">{errors.education?.message}</p>
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
                <p className="error">{errors.employment?.message}</p>
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
                <p className="error">{errors.lookingForWork?.message}</p>
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
                <p className="error">{errors.studyingDegree?.message}</p>
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
            <button type="submit" className="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
