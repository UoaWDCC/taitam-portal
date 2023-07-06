import React from "react";
import { css } from "@linaria/core";
import Image from "next/image";
import image1 from "../../(images)/articles1.png";
import "../../globals.scss";

const headerImage = css`
  max-width: 1119px;
  height: 333px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const title = css`
  padding: 0;
  color: #f96e47;
  text-align: left;
  font-size: 96px;
`;

const root = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;
`;

export default function FirstArticle() {
  return (
    <>
      <Image className={headerImage} src={image1} alt="Landing Image" />
      <div className={root}>
        <h1 className={title}>ARTICLES</h1>
      </div>
    </>
  );
}
