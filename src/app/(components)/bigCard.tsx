import { Poppins } from "next/font/google";
import heart from "../(images)/heart.svg";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Button, { ButtonProps } from "./Button";
import { css } from "@linaria/core";

type CardProps = {
  title: string;
  date: string;
  paragraph: string;
  image: StaticImageData;
  btn: ButtonProps;
};

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

const cardStyle = css`
  border: solid black 1px;
  box-shadow: 0 3px 0 4px;
  display: grid;
  grid-template-columns: auto minmax(350px, 47%);
  grid-template-rows: auto;
  background-color: white;
  margin: 50px 0;
`;

const divStyle = css`
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export const EventCard = ({
  title,
  date,
  paragraph,
  image,
  btn,
}: CardProps) => (
  <aside>
    <div className={cardStyle}>
      <div
        className={divStyle}
        style={{
          margin: "auto 0",
          gridColumnStart: "1",
          width: "100%",
          position: "relative",
        }}
      >
        <Image src={image} alt="Stockholder image 1" fill={true} />
      </div>
      <div
        style={{
          gridColumnStart: "2",
          margin: "20px 25px",
          position: "relative",
        }}
      >
        <p
          className={poppinsMedium.className}
          style={{ margin: "0", fontSize: "16pt" }}
        >
          {title}
        </p>
        <p
          className={poppinsRegular.className}
          style={{ margin: "5px 0", fontSize: "12pt", color: "#056DFA" }}
        >
          {date}
        </p>
        <p style={{ lineHeight: "30px", paddingBottom: "50px" }}>{paragraph}</p>
        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <div
            className={poppinsMedium.className}
            style={{
              float: "left",
              fontSize: "19px",
              textAlign: "center",
            }}
          >
            <Button
              type={btn.type}
              text={btn.text}
              href={btn.href}
              width={btn.width}
              target={btn.target}
            />
          </div>
          <div
            className={poppinsMedium.className}
            style={{ float: "right", margin: "4px 0" }}
          >
            <Image src={heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  </aside>
);
