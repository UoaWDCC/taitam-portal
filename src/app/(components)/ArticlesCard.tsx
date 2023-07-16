import React from "react";
import "./ArticlesCard.css";
import Image, { StaticImageData } from "next/image";

export interface CardProps {
  title: string;
  reference: string;
  par1: string;
  subtitle: string;
  par2: string;
  image: StaticImageData;
  par3: string;
  par4: string;
  par5: string;
}

const ArticlesCard = ({
  title,
  reference,
  par1,
  subtitle,
  par2,
  image,
  par3,
  par4,
  par5,
}: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>{title}</h3>
      </div>

      <div className="card-para">
        <h4 style={{ color: "#056dfa" }}>{reference}</h4>
      </div>

      <div className="card-para">
        <p>{par1}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "30px",
        }}
        className="card-para"
      >
        <div>
          <h3>{subtitle}</h3>
          <p>{par2}</p>
        </div>
        <Image
          src={image}
          alt="Stockholder image 1"
          style={{ width: "384px", height: "216px", marginLeft: "30px" }}
        />
      </div>

      <div className="card-para" style={{ marginTop: "35px" }}>
        <p>{par3}</p>
      </div>

      <div className="card-para">
        <p>{par4}</p>
      </div>

      <div className="card-para">
        <p>{par5}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
