import React from "react";
import "./Card.css";
import { CardInterface } from "../types";
import Button from "./Button";

const Card = ({ title, imageUrl, body, btn }: CardInterface) => {
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

          <Button
            type={btn.type}
            text={btn.text}
            href={btn.href}
            width={btn.width}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
