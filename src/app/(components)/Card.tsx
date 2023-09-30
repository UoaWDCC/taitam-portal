import React from "react";
import "./Card.css";
import Button, { ButtonProps } from "./Button";

export interface CardProps {
  title: string;
  imageUrl: string;
  body: string;
  btn: ButtonProps;
}

const Card = ({ title, imageUrl, body, btn }: CardProps) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <Button
            type={btn.type}
            text={btn.text}
            href={btn.href}
            width={btn.width}
          />
    </div>
  );
};

export default Card;
