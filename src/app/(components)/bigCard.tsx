import { Poppins } from "next/font/google";
import heart from "../(images)/heart.svg";
import React from "react";
import Image from "next/image";
import Button, { ButtonProps } from "./Button";
import {css} from "@linaria/core";

type CardProps = {
  title: string;
  date: string;
  paragraph: string;
  imageUrl: string;
  btn: ButtonProps;
};

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });


const mainBox = css`
        border: solid black 1px;
        box-shadow: 0 3px 0 4px;
        display: grid;
        grid-template-columns: auto% auto%;
        grid-template-rows: auto;
        background-color: white;
        margin: 50px 0;
`

const bottomControls = css`
        margin-top: 64px;
        width: 100%;
        
         @media (max-width: 800px) {
    margin-top: 32px;
    
    @media (max-width: 800px) {
    margin-top: 12px;
  }
`

export const BigCard = ({ title, date, paragraph, imageUrl, btn }: CardProps) => (
  <aside>
    <div className={mainBox}>
      <div
        style={{
          margin: "auto 0",
          gridColumnStart: "1",
          height: "100%",
          position: "relative",
            overflow: "hidden"
      }}
      >
        <img src={imageUrl} alt={"image"} style={{height: "100%", left: "50%"}}/>
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
        <p style={{ lineHeight: "30px" }}>{paragraph}</p>
        <div className={bottomControls}>
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
